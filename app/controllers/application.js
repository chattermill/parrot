import Ember from 'ember';

export default Ember.Controller.extend({
  renderNavbar: Ember.computed('currentPath', function() {
    return (this.get('currentPath') !== 'survey-responses/new') && (this.get('currentPath') !== 'thank-you');
  })
});
