import Ember from 'ember';

export default Ember.Controller.extend({
  response: Ember.computed.alias('model'),
  queryParams: ['score', 'token'],
  score: null,
  token: null,

  title: Ember.computed('score', function() {
    var score = this.get('score');

    return "Please tell us why you chose a " + score;
  }),

  actions: {
    submitResponse: function() {
      var controller = this;
      var response = this.get('response');

      response.set('token', this.get('token'));
      response.set('score', this.get('score'));
      response.save().then(() => {
        controller.transitionToRoute('thank-you');
      });
    }
  }
});
 
  
