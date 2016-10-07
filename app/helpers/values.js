import Ember from 'ember';

const { Helper } = Ember;

export function values(params/* , hash */) {
  let [param] = params;

  return Object.keys(param)
  .map((key) => param[key])
  .join('; ');
}

export default Helper.helper(values);
