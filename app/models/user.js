import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  address: attr('hash'),
  email: attr(),
  firstName: attr(),
  lastName: attr(),
  phone: attr('phone'),
  serviceType: attr(),

  insertedAt: attr('date'),
  updatedAt: attr('date'),

  details: attr('hash', {
    defaultValue: () => ({
      residenceTypes: []
    })
  })
});
