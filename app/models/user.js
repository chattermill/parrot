import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  mailchimpLists: DS.hasMany('mailchimp-list', { async: true }),
  availableMailchimpLists: DS.attr(),
  selectedMailchimpListId: DS.attr('string'),
});
