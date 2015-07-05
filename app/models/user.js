import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  lists: DS.attr(),
  selected: DS.attr('string'),
  campaigns: DS.hasMany('campaign', {async: true}),
});
