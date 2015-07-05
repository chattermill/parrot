import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.computed.alias('session.currentUser'),

  actions: {
    createCampaign: function() {
      var campaign = this.get('model');
      campaign.set('user', this.get('currentUser'));
      campaign.save().then(() => {
        this.transitionToRoute('campaigns');
      });
    }
  }
});
 
  
