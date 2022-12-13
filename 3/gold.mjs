import { add, equals, filter, find, isNil, map, mergeAll, not, pipe, reduce, split, splitEvery, take, tap, unnest } from "ramda";
import { readInput } from "../helpers.mjs";

const alphaMap = pipe(
  () => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  split(''),
  alphabet => alphabet.map((el, i) => ({[el]: i + 1})),
  mergeAll
)()

// find as in bs
const findit = ([a, b, c]) => pipe(
  ([a, _]) => split("", a),
  map(a => find(equals(a), b) && find(equals(a), c)),
  filter(pipe(isNil, not)),
  take(1)
)([a, b, c])

const main = pipe(
  readInput,
  splitEvery(3), // split into groups of 3
  map(findit), // find the 1 common character across all 3 strings
  unnest,
  map(el => alphaMap[el]), // convert to priorities (a-z = 1-26, A-Z = 27-52),
  reduce(add, 0),
  tap(console.log)
)

main('./input')