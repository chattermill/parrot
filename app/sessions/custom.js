import Session from 'simple-auth/session';

export default Session.extend({

  // here _store is ember-data store injected by initializer
  // why "_store"? because "store" is already used by simple-auth as localStorage
  // // why initializer? I tried 
  // store: Ember.inject.service(), //and got error

  currentUser: function() {
    var userId = this.get('secure.user_id');
  
    if (userId && this.get('isAuthenticated')) {
      return this._store.find('user', userId);
    }
  }.property('secure.user_id', 'isAuthenticated')





});