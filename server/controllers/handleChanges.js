const mongoose = require('mongoose');
const Correction = mongoose.model('Correction');

let addCorrection = async(req, res) => {
    const {
        articleUrl,
        originalText,
        usersText
    } = req.body;
    
    if (!usersText) {
        res
            .status(500)
            .send('New text is required');
    }

    let correction = new Correction({
        articleUrl,
        originalText,
        usersText,
        isApproved: false
    });

    try {
        await correction.save();
    } catch (e) {
        res
            .status(500)
            .send('Server error');
    }

    res
        .status(200)
        .send('Added');
}

let approveCorrection = async(req, res) => {
    const id = req.params.id;

    try {
        await Correction.findOneAndUpdate({
            id
        }, {
            $set: {
                isApproved: true
            }
        });
    } catch (e) {
        res
            .status(500)
            .send(e);
    }

    res
        .status(200)
        .send('Updated');
}

let deleteCorrection = async(req, res) => {
    const id = req.params.id;

    try {
        await Correction.findOneAndRemove({
            id
        });
    } catch (e) {
        res
            .status(500)
            .send(e);
    }

    res
        .status(200)
        .send('Deleted');
}

let sendCorrections = async(req, res) => {
    let list;

    try {
        list = await Correction.find({
            isApproved: false
        });
    } catch (e) {
        res
            .status(500)
            .send(e);
    }

    res.jsonp(list);
}

module.exports.list = sendCorrections;
module.exports.add = addCorrection;
module.exports.approve = approveCorrection;
module.exports.delete = deleteCorrection;