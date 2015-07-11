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
      'connect-src': "'self' http://localhost:3000",
      'img-src': "'self'",
      'report-uri':"'localhost'",
      'style-src': "'self' 'unsafe-inline'",
      'frame-src': "'none'"
    },

    torii: {
      // a 'session' property will be injected on routes and controllers
      // sessionServiceName: 'session',
      providers: {
        'mailchimp-oauth2': {
          apiKey:      '479693114617',
          redirectUri: 'http://127.0.0.1:4200'
        }
      }
    },
    filepickerKey: 'AcoXd9enaQcivHNs2tP0Bz',
    algolia: {
      appId: "90Q6YHP7GM",
      apiKey: "00a0cf2e67a3fbdd996120601ec18b98",
      index: "SurveyResponse_development"
    }

  };

  if (environment === 'development') {
    ENV.host = 'http://localhost:3000';
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

  }

    
  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:oauth2-bearer',
    crossOriginWhitelist: ['http://localhost:3000'],
    session: 'session:custom',
    routeAfterAuthentication: 'settings'
  };

  ENV['simple-auth-oauth2'] = {
    serverTokenEndpoint: ENV.host + '/api/sessions'
  };

  return ENV;
};
