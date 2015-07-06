import DS from 'ember-data';

export default DS.Model.extend({
  companyName: DS.attr('string'),
  fromName: DS.attr('string'),
  backgroundColor: DS.attr('string'),
  foregroundColor: DS.attr('string'),
  replyAddress: DS.attr('string'),
  imageUrl: DS.attr('string'),
  user: DS.belongsTo('user', {async: true})
});
