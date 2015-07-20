import Ember from 'ember';

export default Ember.Component.extend({
  badgeClass: Ember.computed('score', function() {
    var score = this.get('score');

    if (score > 8) {
      return "cm-promoter";
    } else if (score > 6) {
      return "cm-passive";
    } else {
      return "cm-detractor";
    }

  })
});
