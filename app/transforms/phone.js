import DS from 'ember-data';

const { Transform } = DS;

export default Transform.extend({
  deserialize(serialized) {
    return serialized;
  },

  serialize(deserialized) {
    if (deserialized && deserialized.replace) {
      return deserialized.replace(/\D/g, '');
    }
  }
});
