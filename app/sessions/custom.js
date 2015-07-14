import Session from 'simple-auth/session';
import Ember from 'ember';

export default Session.extend({

  // here _store is ember-data store injected by initializer
  // why "_store"? because "store" is already used by simple-auth as localStorage
  // // why initializer? I tried 
  // store: Ember.inject.service(), //and got error

  currentUser: Ember.computed('secure.user_id', 'isAuthenticated', function() {
    var userId = this.get('secure.user_id');
  
    if (userId && this.get('isAuthenticated')) {
      return this._store.find('user', userId);
    }
  })
});