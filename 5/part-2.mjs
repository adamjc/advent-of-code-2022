import { converge, drop, filter, isNil, join, map, match, not, pipe, take, tap, transpose, unnest } from "ramda";
import { readInput } from "../helpers.mjs";

// String => null|[A-Z]{1}
const makeNullOrDigitise = str => str.match(/\s{2,4}/) ? null : str.split('')[1]

// String => [String{1}]
const parseRow = pipe(
  match(/((\s{2,4})|\[(.)\])/g),
  map(makeNullOrDigitise)
)

const parseStacks = pipe(
  take(8),
  map(parseRow),
  transpose,
  map(filter(pipe(isNil, not)))
)

const parseActions = map(pipe(
  match(/move (\d+) from (\d+) to (\d+)/),
  ([_, n, from, to]) => [Number(n), Number(from - 1), Number(to - 1)]
))

const runAction = (stacks, [n, from, to]) => stacks.map((stack, i) => {
  if (i === from) return drop(n, stack)
  if (i === to) return [...take(n, stacks[from]), ...stack] // add the items from stack 'from' to stack 'to' in reverse order
  return stack
})

const parseAndRunActions = converge(
  (stacks, actions) => actions.reduce(runAction, stacks),
  [
    parseStacks, // returns just the stacks from the input
    pipe(drop(10), parseActions) // returns just the list of actions from the input
  ]
)

const main = pipe(
  readInput,
  parseAndRunActions,
  map(take(1)),
  unnest,
  join(''),
  tap(console.log)
)

main('./input')