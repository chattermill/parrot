import Ember from 'ember';

export default Ember.Controller.extend({
  lists: Ember.computed.alias('session.currentUser.lists'),
  selected: Ember.computed('session.currentUser.selected', {
    get() {
      return this.get('session.currentUser.selected');
    },
    set(key, listId) {
      var controller = this;

      controller.get('session.currentUser').then(function(user) {
        user.set('selected', listId);
        user.save().then(()=> {
          controller.transitionToRoute('campaigns/design');
        });
      });
    }
  })
});
