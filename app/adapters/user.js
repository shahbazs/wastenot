import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForCreateRecord() {
    let url = this._super.apply(this, arguments).replace('users', 'register');
    console.debug({ url });
    return url;
  }
});
