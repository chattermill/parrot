import Ember from 'ember';
import algoliasearch from "npm:algoliasearch";
import ENV from "parrot/config/environment";

export default Ember.Service.extend({
  index: Ember.computed(function(){
     var client = algoliasearch(ENV.algolia.appId, ENV.algolia.apiKey);
     return client.initIndex(ENV.algolia.index);
  })
});