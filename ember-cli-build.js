/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
      sassOptions: {
        includePaths: ['bower_components/materialize/sass']
      },
    });

    app.import('bower_components/materialize/bin/materialize.js');
    // app.import('bower_components/mui/dist/email/mui-email-inline.css');
    // app.import('bower_components/mui/dist/email/mui-email-styletag.css');

    return app.toTree();
};