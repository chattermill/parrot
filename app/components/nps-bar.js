import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cm-nps-bar', 'progress'],
  didInsertElement: function() {
    this.renderChildTooltips();
  },

  promoterBarStyle: Ember.computed('campaign.percentagePromoters', function() {
    var percentagePromoters = this.get('campaign.percentagePromoters');
    return new Ember.Handlebars.SafeString("width:" + (percentagePromoters * 100) + "%");
  }),
  passiveBarStyle: Ember.computed('campaign.percentagePassives', function() {
    var percentagePassives = this.get('campaign.percentagePassives');
    return new Ember.Handlebars.SafeString("width:" + (percentagePassives * 100) + "%");
  }),
  detractorBarStyle: Ember.computed('campaign.percentageDetractors', function() {
    var percentageDetractors = this.get('campaign.percentageDetractors');
    return new Ember.Handlebars.SafeString("width:" + (percentageDetractors * 100) + "%");
  })
});
