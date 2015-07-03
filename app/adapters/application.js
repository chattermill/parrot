import DS from 'ember-data';
import ENV from "parrot/config/environment";

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  host: ENV.host
});
