import DS from 'ember-data';

export default DS.Model.extend({
  score: DS.attr('number'),
  body: DS.attr('string'),
  token: DS.attr('string')
});
