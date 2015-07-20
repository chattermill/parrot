import DS from 'ember-data';
import ValidatorMixin from 'ember-cli-data-validation/mixins/validator';
import Ember from 'ember';

export default DS.Model.extend(ValidatorMixin, {
  companyName: DS.attr('string', {
    validation: {
      required: true,
    },
    defaultValue: "Awesome Co"
  }),
  fromName: DS.attr('string', {
    validation: {
      required: true,
    },
    defaultValue: "Emma from Awesome Co"
  }),
  backgroundColor: DS.attr('string', {
    defaultValue: 'FFFFFF'
  }),
  foregroundColor: DS.attr('string', {
    defaultValue: '000000'
  }),
  replyAddress: DS.attr('string', {
    validation: {
      required: true,
      email: true,
    },
    defaultValue: "awesome@awesome.com"
  }),
  imageUrl: DS.attr('string', {
    validation: {
      required: true,
    },
    defaultValue: 'https://s3-us-west-2.amazonaws.com/chattermill/images/oie_LlN2BfgNsx0x.png'
  }),
  fromAddress: DS.attr('string', {
    validation: {
      required: true,
      email: true,
    },
    defaultValue: "no-reply@awesome.com"
  }),
  companyUrl: DS.attr('string', {
    validation: {
      required: true,
      url: true
    },
    defaultValue: "http://awesome.com"
  }),
  npsScore: DS.attr('number'),
  score: Ember.computed('npsScore', function() {
    return this.get('npsScore') * 100;
  }),
  percentagePromoters: DS.attr('number'),
  percentageDetractors: DS.attr('number'),
  percentagePassives: DS.attr('number'),
  
  numberOfPromoters: DS.attr('number'),
  numberOfDetractors: DS.attr('number'),
  numberOfPassives: DS.attr('number'),
    

  numberOfSurveysSent: DS.attr('number'),
  numberOfResponses: DS.attr('number'),
  responseRate: DS.attr('number'),
  createdAt: DS.attr('date'),
  lastResponses: DS.attr(),
  user: DS.belongsTo('user', { async: true }),
});
