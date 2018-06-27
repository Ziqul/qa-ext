require('material-icons');
require('materialize-css/dist/css/materialize.min.css');
require('./global.css');

require('jquery');
require('materialize-css/dist/js/materialize.min.js');
const Rlite = require('rlite-router');

const route = Rlite(notFound, {
    "": function() {
        return require('./components/credcheck/layout.html');
    },

    "report": function() {
        return require('./components/report/layout.html');
    },

    // #sent?to=john -> r.params.to will equal 'john'
    "sent": function({
        to
    }) {
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
    const hash = location.hash || '#';
    $('#view').html(route(hash.slice(1)));
}

window.addEventListener('hashchange', processHash);
processHash();
