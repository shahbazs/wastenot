import Ember from 'ember';

const { Helper, isBlank } = Ember;

export function keyValues(params/* , hash */) {
  let [param] = params;

  return Object.keys(param)
  .sort()
  .filter((key) => !isBlank(param[key]))
  .map((key) => `${key}: ${param[key]}`)
  .join('; ');
}

export default Helper.helper(keyValues);
