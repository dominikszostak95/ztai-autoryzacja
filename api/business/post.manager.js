'use strict';

var PostDAO = require('../DAO/postDAO');

function create(context) {
    async function createNewOrUpdate(data) {
        let result = await PostDAO.createNewOrUpdate(data);
        if (result) {
            return result;
        }
    }

    async function query() {
        let result = await PostDAO.query();
        if (result) {
            return result;
        }
    }

    async function get(id) {
        let result = await PostDAO.get(id);
        if (result) {
            return result;
        }
    }

    return {
        createNewOrUpdate: createNewOrUpdate,
        query: query,
        get: get,
    };
}

module.exports = {
    create: create
};
// export default {
//     create: create
// };