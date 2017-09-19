const axios = require('axios');

function getPage(url) {
    return axios.get('/api/page?articleUrl=' + url);
}

function sendNew(data) {
    return axios.post('/api/changes/add', data);
}

const Service = function () {
    return {
        get: getPage,
        send: sendNew
    };
}

module.exports = Service;