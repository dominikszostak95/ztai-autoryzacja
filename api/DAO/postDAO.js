'use strict';

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var mongoConverter = require('../service/mongoConverter');
var applicationException = require('../service/applicationException');

const postSchema = new mongoose.Schema({
    title: {type: String},
    url: {type: String},
    content: {type: String},
}, {
    collection: 'posts'
});
postSchema.plugin(uniqueValidator);

const PostModel = mongoose.model('posts', postSchema);

function query() {
    return PostModel.find({}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

function get(id) {
    return PostModel.findOne({_id: id}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

function createNewOrUpdate(data) {
    return Promise.resolve().then(() => {
        if (!data.id) {
            return new PostModel(data).save().then(result => {
                if (result[0]) {
                    return mongoConverter(result[0]);
                }
            });
        } else {
            return PostModel.findByIdAndUpdate(data.id, _.omit(data, 'id'), {new: true});
        }
    }).catch(error => {
        if ('ValidationError' === error.name) {
            error = error.errors[Object.keys(error.errors)[0]];
            throw applicationException.new(applicationException.BAD_REQUEST, error.message);
        }
        throw error;
    });
}

module.exports = {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,

    model: PostModel
};