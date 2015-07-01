import Oauth2 from 'torii/providers/oauth2-code';
import { configurable } from 'torii/configuration';

export default Oauth2.extend({
  name: 'mailchimp-oauth2',
  baseUrl: 'https://login.mailchimp.com/oauth2/authorize',

  requiredUrlParams: ['state'],
  responseParams: ['code'],

  state: 'STATE',

  redirectUri: configurable('redirectUri', function () {
    return this._super();
  })
});