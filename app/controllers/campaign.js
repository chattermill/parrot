import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  search: Ember.inject.service('AlgoliaSearch'),
  campaignId: Ember.computed.alias('model.id'),
  query: '',

  results: Ember.computed.oneWay('model.lastResponses'),
  score: Ember.computed('model.npsScore', function() {
    return this.get('model.npsScore') * 100;
  }),
  title: Ember.computed('model.companyName', 'model.createdAt', function() {
    var name = this.get('model.companyName');
    var date = this.get('model.createdAt'); 
    return name + " - " + moment(date).format('MMMM YYYY');
  }),
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

  searchResponses: Ember.observer('query', function() {
    var controller = this;
      var query = controller.get('query');
      var campaignId = controller.get('campaignId');
      var index = controller.get('search.index');

      if (Ember.isEmpty(query)){
        var defaultResults = controller.get('model.lastResponses');
        controller.set('results', defaultResults);
        return;
      } else {
        index.search(query, {
          tagFilters: ["campaign_" + campaignId]
        }).then(data => {
          controller.set('results', data.hits);
        }).catch(function(err){
          console.log('err', err);
        });
      }
  })
});
