const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const counter = mongoose.model('counter');

let correctionSchema = new Schema({
    id: {
        type: Number
    },
    articleUrl: {
        type: String,
        require: true
    },
    originalText: {
        type: String,
        require: true
    },
    usersText: {
        type: String,
        require: true
    },
    isApproved: {
        type: Boolean,
        default: false
    }
});

correctionSchema.pre('save', function (next) {
    var doc = this;
    counter.findByIdAndUpdate({
        _id: 'correction'
    }, {
        $inc: {
            seq: 1
        }
    }, {
        upsert: true,
        new: true
    }, function (error, counter) {
        if (error) {
            return next(error);
        }
        doc.id = counter.seq;
        next();
    });
});

mongoose.model('Correction', correctionSchema);