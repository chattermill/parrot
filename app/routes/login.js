import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    mailchimpLogin: function() {
      this.get('session').open('mailchimp-oauth2').then(function () {
        alert("logged in");
      });
      
      return;
    }
  }
});
