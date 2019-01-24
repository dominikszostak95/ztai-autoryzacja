'use strict';

// import * as _ from 'lodash';
var _ = require('lodash');

function convert(data) {
    if (Array.isArray(data)) {
        return _.map(data, function (elem) {
            return convert(elem);
        });
    }
    data = data.toObject({getters: true, versionKey: false});
    delete data._id;
    return data;
}

module.exports = convert;
// export default convert;