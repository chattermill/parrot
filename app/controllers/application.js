import Ember from 'ember';

export default Ember.Controller.extend({
  lists: Ember.computed.alias('session.currentUser.lists'),
  selected: Ember.computed.alias('session.currentUser.selected'),

  actions: {
    selectList: function(list) {
      var controller = this;
      var listId = list.id;

      controller.get('session.currentUser').then(function(user) {
        user.set('selected', listId);
        user.save();
      });
    }
  } 
});
