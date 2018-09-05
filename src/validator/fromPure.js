import {
  compose,
  ifElse,
  apply,
  map,
  uniq,
  evolve,
  is,
  path,
  append,
  converge,
  unless,
  always,
  not,
  isNil,
  when,
  merge,
} from 'ramda'

const fromPure = (func, funcName = '') =>
  (name, config = {}, message = func.message) =>
    ifElse(
      compose(is(Array), always(name)),
      f => apply(compose, map(n => fromPure(func, funcName)(n, config, message), name))(f),
      when(
        compose(
          not,
          isNil,
          path([ 'fields', name ])
        ),
        unless(
          converge(func, [ path([ 'fields', name, 'value' ]), always(config) ]),
          compose(
            evolve({
              errors: compose(
                evolve({ [name]: compose(uniq, append({ name: funcName, message })) }),
                merge({ [name]: [] })
              )
            }),
          )
        )
      )
    )

export default fromPure