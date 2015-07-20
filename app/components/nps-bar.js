import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cm-nps-bar', 'progress'],

  promoterBarStyle: Ember.computed('campaign.percentagePromoters', function() {
    var percentagePromoters = this.get('campaign.percentagePromoters');
    return new Ember.Handlebars.SafeString("width:" + (percentagePromoters * 100) + "%");
  }),
  passiveBarStyle: Ember.computed('campaign.percentagePassives', function() {
    var percentagePassives = this.get('campaign.percentagePassives');
    var left = this.get('campaign.percentagePromoters');

    return new Ember.Handlebars.SafeString("left:" + (left * 100) + "%;width:" + (percentagePassives * 100) + "%");
  }),
  detractorBarStyle: Ember.computed('campaign.percentageDetractors', function() {
    var percentageDetractors = this.get('campaign.percentageDetractors');
    var left = this.get('campaign.percentagePromoters') + this.get('campaign.percentagePassives');

    return new Ember.Handlebars.SafeString("left:" + (left * 100) + "%;width:" + (percentageDetractors * 100) + "%");
  })
});
