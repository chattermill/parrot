import Ember from 'ember';

export default Ember.Controller.extend({
  response: Ember.computed.alias('model'),
  queryParams: ['score', 'token'],
  score: null,
  token: null,
  
  actions: {
    submitResponse: function() {
      var response = this.get('response');

      response.set('token', this.get('token'));
      response.set('score', this.get('score'));
      response.save().then(() => {
        alert('saved');
      });
    }
  }
});
 
  
