import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  createRecord(store, type, snapshot) {
    let { adapterOptions } = snapshot;

    if (adapterOptions.action === 'details') {
      return this.updateRecord(...arguments);
    }

    return this._super(...arguments);
  },

  urlForCreateRecord(modelName, snapshot) {
    let { adapterOptions } = snapshot;
    let url = this._super(...arguments);

    if (adapterOptions.action === 'register') {
      return url.replace('users', 'register');
    }

    return url;
  }
});
