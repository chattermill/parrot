import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
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
