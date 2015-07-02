import DS from 'ember-data';
import ENV from "parrot/config/environment";

export default DS.ActiveModelAdapter.extend({
  namespace: 'api',
  host: ENV.host
});
