import OAuth2PasswordGrant from
'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from 'wastenot/config/environment';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: `${ENV.DS.host}/token`
});
