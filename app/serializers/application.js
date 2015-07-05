import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serialize: function(record, options) {
    options = options || {includeId: true};
    return this._super(record, options);
  }
});
