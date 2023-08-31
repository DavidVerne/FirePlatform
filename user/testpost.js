'use strict';

module.exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify("This is a test post event."),
    };
};