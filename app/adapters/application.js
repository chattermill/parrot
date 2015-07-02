import DS from 'ember-data';
import ENV from "my-app/config/environment";

export default DS.ActiveModelAdapter.extend({
  namespace: 'api',
  host: ENV.host
});
