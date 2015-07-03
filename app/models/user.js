import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  lists: DS.attr(),
  selectedMailchimpListId: DS.attr('string'),
});
