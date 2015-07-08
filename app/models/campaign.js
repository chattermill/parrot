import DS from 'ember-data';

export default DS.Model.extend({
  companyName: DS.attr('string'),
  fromName: DS.attr('string'),
  backgroundColor: DS.attr('string'),
  foregroundColor: DS.attr('string'),
  replyAddress: DS.attr('string'),
  imageUrl: DS.attr('string'),
  fromAddress: DS.attr('string'),
  companyUrl: DS.attr('string'),
  npsScore: DS.attr('number'),
  percentagePromoters: DS.attr('number'),
  percentageDetractors: DS.attr('number'),
  createdAt: DS.attr('date'),
  user: DS.belongsTo('user', {async: true})
});
