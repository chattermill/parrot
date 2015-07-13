import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
    npsScore: {serialize: false},
    percentagePromoters: {serialize: false},
    percentageDetractors: {serialize: false},
    percentagePassives: {serialize: false},
    
    numberOfPromoters: {serialize: false},
    numberOfDetractors: {serialize: false},
    numberOfPassives: {serialize: false},

    numberOfSurveysSent: {serialize: false},
    numberOfResponses: {serialize: false},
    responseRate: {serialize: false},
    lastResponses: {serialize: false},
    createdAt: {serialize: false},
  },
  serialize: function(record, options) {
    options = options || {includeId: true};
    return this._super(record, options);
  }
});