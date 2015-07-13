import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    authenticate: function() {
      this.get('session').authenticate('authenticator:torii-oauth2', {
        torii: this.get('torii'),
        provider: 'mailchimp-oauth2'
      }, function(error) {
        alert('There was an error when trying to sign you in: ' + error);
      });
      
      return;
    }
  }
});
