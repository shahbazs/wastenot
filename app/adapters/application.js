import DS from 'ember-data';
import ENV from 'wastenot/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.apiHost
});
