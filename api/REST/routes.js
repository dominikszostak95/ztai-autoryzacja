'use strict';

const postEndpoint = require('./post.endpoint');
const userEndpoint = require('./user.endpoint');


const routes = (router, config) => {
    postEndpoint (router);
    userEndpoint (router);
};

module.exports = routes;
// export default routes;