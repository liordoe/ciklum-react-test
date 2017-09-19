const cheerio = require('cheerio');
const request = require('request');

var getPage = function (url) {
    return new Promise(function (resolve, reject) {
        request(url, function (err, res, body) {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        });
    })

}

let handlePage = async(req, res) => {
    const url = req.query.articleUrl;
    let page, $, article;
    let title = '';
    let pharagraphs = [];

    try {
        page = await getPage(url);
    } catch (e) {
        console.log(e);
        return res
            .status(500)
            .send(e);
    }

    $ = cheerio.load(page);
    article = $('article:not(.preview)');

    title = article.find('h2').text();

    article.find('p').each(function (ind, elem) {
        pharagraphs.push($(elem).text());
    });

    res.jsonp({
            title,
            pharagraphs
        });
}

module.exports.handler = handlePage;