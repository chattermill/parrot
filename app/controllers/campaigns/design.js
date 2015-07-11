import Ember from 'ember';

export default Ember.Controller.extend({
  filepicker: Ember.inject.service(),
  currentUser: Ember.computed.alias('session.currentUser'),
  showFilePicker: false,

   backgroundStyle: Ember.computed('model.backgroundColor', function() {
    var color = this.get('model.backgroundColor');
    return new Ember.Handlebars.SafeString("display:inline-block;height:20px;width:20px;background-color: #" + color);
  }),

  foregroundStyle: Ember.computed('model.foregroundColor', function() {
    var color = this.get('model.foregroundColor');
    return new Ember.Handlebars.SafeString("display:inline-block;height:20px;width:20px;background-color: #" + color);
  }),
  
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
 
  
