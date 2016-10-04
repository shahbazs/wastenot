import DS from 'ember-data';
import ENV from 'wastenot/config/environment';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend({
  host: ENV.DS.host
});
