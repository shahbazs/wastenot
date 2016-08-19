import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    return serialized;
  },

  serialize(deserialized) {
    if (deserialized && deserialized.replace) {
      return deserialized.replace(/\D/g, "");
    }
  }
});
