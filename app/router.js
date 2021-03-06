import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('logout');
  this.route('login');
  this.route('protected');
  this.route('settings');
  this.route('campaign', { path: '/campaigns/:campaign_id' });
  this.route('campaigns');
  this.route('campaigns/design');
  this.route('survey-responses/new', {path: '/responses/new'});
  this.route('thank-you');
});

export default Router;
