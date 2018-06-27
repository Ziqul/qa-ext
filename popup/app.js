require('jquery');
require('material-icons');
require('materialize-css');
require('rivets');
const Rlite = require('rlite-router');

const route = Rlite(notFound, {
    // Default route
    "": function() {
        return 'Home';
    },

    // #inbox
    "inbox": function() {
        return 'Inbox';
    },

    // #sent?to=john -> r.params.to will equal 'john'
    "sent": function({
        to
    }) {
        return 'Sent to ' + to;
    },

    // #users/chris -> r.params.name will equal 'chris'
    "users/:name": function({
        name
    }) {
        return 'User ' + name;
    },

    // #users/foo/bar/baz -> r.params.path will equal 'foo/bar/baz'
    "users/*path": function({
        path
    }) {
        return 'Path = ' + path;
    },

    // #logout
    "logout": function() {
        return 'Logout';
    }
});

function notFound() {
    return '<h1>404 Not found :/</h1>';
}

// Hash-based routing
function processHash() {
    const hash = location.hash || '#sent?to=john';

    // Do something useful with the result of the route
    $('#view').html(route(hash.slice(1)));
}

window.addEventListener('hashchange', processHash);
processHash();