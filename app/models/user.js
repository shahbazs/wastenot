import DS from 'ember-data';

export default DS.Model.extend({
  address: DS.attr('hash'),
  details: DS.attr('hash'),
  email: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  phone: DS.attr('phone')
});
