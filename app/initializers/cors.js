import Ember from 'ember';

export function initialize(/* container, application */) {
  Ember.$.ajaxPrefilter(function(options) {
    options.crossDomain = true;
    options.xhrFields = { withCredentials: true };

    options.headers = {
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    };
  });
}

export default {
  name: 'cors',
  initialize: initialize
};
