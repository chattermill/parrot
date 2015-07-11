import Ember from 'ember';

export default Ember.Controller.extend({
  search: Ember.inject.service('AlgoliaSearch'),
  campaignId: Ember.computed.alias('model.id'),
  query: '',
  results: Ember.computed.oneWay('model.lastResponses'),
  promoterBarStyle: Ember.computed('model.percentagePromoters', function() {
    var percentagePromoters = this.get('model.percentagePromoters');
    return new Ember.Handlebars.SafeString("width:" + (percentagePromoters * 100) + "%");
  }),
  passiveBarStyle: Ember.computed('model.percentagePassives', function() {
    var percentagePassives = this.get('model.percentagePassives');
    return new Ember.Handlebars.SafeString("width:" + (percentagePassives * 100) + "%");
  }),
  detractorBarStyle: Ember.computed('model.percentageDetractors', function() {
    var percentageDetractors = this.get('model.percentageDetractors');
    return new Ember.Handlebars.SafeString("width:" + (percentageDetractors * 100) + "%");
  }),
  


  actions: {
    searchResponses: function() {
      var query = this.get('query');
      var campaignId = this.get('campaignId');
      var index = this.get('search.index');

      if (Ember.isEmpty(query)){
        this.set('results', null);
        return;
      } else { 
        index.search(query, {
          tagFilters: ["campaign_" + campaignId]
        }).then(data => {
          console.log(data);
          this.set('results', data.hits);
        }).catch(function(err){
          console.log('err', err);
        });
      }
    }
  }
});
