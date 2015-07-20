import Ember from 'ember';

export default Ember.Component.extend({
  backgroundColor: Ember.computed('campaign.backgroundColor', function() {
    var backgroundColor = this.get('campaign.backgroundColor');
    return new Ember.Handlebars.SafeString("background-color:#" + backgroundColor + ";");
  }),
  
  foregroundColor: Ember.computed('campaign.foregroundColor', function() {
    var foregroundColor = this.get('campaign.foregroundColor');
    return new Ember.Handlebars.SafeString("color:#" + foregroundColor + ";");
  }),

  replyAddress: Ember.computed('campaign.replyAddress', function() {
    var replyAddress = this.get('campaign.replyAddress');
    return new Ember.Handlebars.SafeString("mailto:" + replyAddress);
  })
});