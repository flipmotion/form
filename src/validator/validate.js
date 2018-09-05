import {
  compose,
  evolve,
  merge,
  __,
  is,
  mergeWith,
} from 'ramda';

const deepMerge = (a, b) =>
  ((is(Object, a) && is(Object, b)) ? mergeWith(deepMerge, a, b) : b)

const validate = (form, check, callback) =>
  (name, changes = {}) =>
    compose(
      callback,
      check,
      evolve({
        fields: deepMerge(__, changes)
      }),
      merge(__, { errors: {} })
    )(form)

export default validate