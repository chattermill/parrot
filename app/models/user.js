import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  mailchimpLists: DS.hasMany('macilhimp-list', { async: true })
});
