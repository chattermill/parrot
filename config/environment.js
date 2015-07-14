/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'parrot',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
      'font-src': "'self'",
      'connect-src': "'self' http://localhost:3000 http://parrot-api.herokuapp.com",
      'img-src': "'self'",
      'report-uri':"'localhost'",
      'style-src': "'self' 'unsafe-inline'",
      'frame-src': "'none'"
    },
    sassOptions: {
      includePaths: ['bower_components/materialize/sass']
    },
    pace: {
      theme: 'minimal'
    }
  };

  if (environment === 'development') {
    ENV.host = 'http://localhost:3000';
    ENV.algolia = {
      appId: "PQFIJ1TA2P",
      apiKey: "99a5fc4584a4072d1903c319594ae567",
      index: "SurveyResponse_development"
    };
    ENV.filepickerKey = 'AcoXd9enaQcivHNs2tP0Bz';
    ENV.torii = {
      providers: {
        'mailchimp-oauth2': {
          apiKey:      '479693114617',
          redirectUri: 'http://127.0.0.1:4200'
        }
      }
    };
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.host = 'http://parrot-api.herokuapp.com';
    ENV.filepickerKey = 'AcoXd9enaQcivHNs2tP0Bz';
    ENV.algolia = {
      appId: "PQFIJ1TA2P",
      apiKey: "99a5fc4584a4072d1903c319594ae567",
      index: "SurveyResponse_production"
    };
    ENV.torii = {
      providers: {
        'mailchimp-oauth2': {
          apiKey:      '364320889953',
          redirectUri: 'http://beta.chattermill.io'
        }
      }
    };

  }

    
  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:oauth2-bearer',
    crossOriginWhitelist: ['http://localhost:3000', 'http://parrot-api.herokuapp.com'],
    session: 'session:custom',
    routeAfterAuthentication: 'settings'
  };

  ENV['simple-auth-oauth2'] = {
    serverTokenEndpoint: ENV.host + '/api/sessions'
  };

  return ENV;
};
