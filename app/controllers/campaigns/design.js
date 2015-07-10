import Ember from 'ember';

export default Ember.Controller.extend({
  filepicker: Ember.inject.service(),
  currentUser: Ember.computed.alias('session.currentUser'),
  showFilePicker: false,
  
  actions: {
    fileSelected: function(data) {
      var campaign = this.get('model');
      campaign.set('imageUrl', data.url);
    },

    showPicker: function() {
      this.set('showFilePicker', true);
    },
    
    hidePicker: function() {
      this.set('showFilePicker', false);
    },
    
    onClose: function() {
      this.send('hidePicker');
    },
    
    onError: function(error) {
      console.log(error);
      this.send('hidePicker');
    },
    
    createCampaign: function() {
      var campaign = this.get('model');
      campaign.set('user', this.get('currentUser'));

      campaign.save().then(() => {
        this.transitionToRoute('campaigns');
      });
    }
  }
});
 
  
