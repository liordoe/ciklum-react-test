const ITEMS = [{
    link: '/fb',
    text: 'New Article'
}, {
    link: '/fb/results',
    text: 'Suggestions list'
}];

const Store = function () {
    return {
        items: ITEMS
    };
}

module.exports = Store;