import DS from 'ember-data';
import ValidatorMixin from 'ember-cli-data-validation/mixins/validator';

export default DS.Model.extend(ValidatorMixin, {
  companyName: DS.attr('string', {
    validation: {
      required: true,
    }
  }),
  fromName: DS.attr('string', {
    validation: {
      required: true,
    }
  }),
  backgroundColor: DS.attr('string'),
  foregroundColor: DS.attr('string'),
  replyAddress: DS.attr('string', {
    validation: {
      required: true,
      email: true,
    }
  }),
  imageUrl: DS.attr('string'),
  fromAddress: DS.attr('string', {
    validation: {
      required: true,
      email: true,
    }
  }),
  companyUrl: DS.attr('string', {
    validation: {
      required: true,
      url: true
    }
  }),
  npsScore: DS.attr('number'),
  percentagePromoters: DS.attr('number'),
  percentageDetractors: DS.attr('number'),
  createdAt: DS.attr('date'),
  lastResponses: DS.attr(),
  user: DS.belongsTo('user', { async: true }),
});
