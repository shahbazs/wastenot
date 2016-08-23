import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let user = this.store.createRecord('user', { id: params.user_id });
    let address = Ember.Object.create();
    let details = Ember.Object.create();

    user.setProperties({ address, details });
    return user;
  },

  actions: {
    doSubmit() {
      this.get('currentModel').save()
      .then(() => {
        this.transitionTo('thanks');
      })
      .catch((err) => {
        console.warn({ err });
      });
    }
  }
});
