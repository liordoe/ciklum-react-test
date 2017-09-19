const axios = require('axios');

function getList() {
    return axios.get('/api/changes');
}

function approveItem(id) {
    return axios.put('/api/changes/' + id);
}

function removeItem(id) {
    return axios.delete('/api/changes/' + id);
}

const Service = function () {
    return {
        get: getList,
        approve: approveItem,
        delete: removeItem
    };
}

module.exports = Service;