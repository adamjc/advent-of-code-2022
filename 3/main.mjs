import { add, converge, divide, equals, filter, find, identity, isNil, length, map, mergeAll, not, pipe, reduce, split, splitAt, take, tap, unnest, __ } from "ramda";
import { readInput } from "../helpers.mjs";

const alphaMap = pipe(
  () => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  split(''),
  alphabet => alphabet.map((el, i) => ({[el]: i + 1})),
  mergeAll
)()

// find as in bs
const findit = ([a, b]) => pipe(
  ([a, _]) => split("", a),
  map(a => find(equals(a), b)),
  filter(pipe(isNil, not)),
  take(1)
)([a, b])

// finds the middle index of a string of even length
// string => int
const midpoint = pipe(length, divide(__, 2))

// splits a string of even length into two strings of equal length
// string => [string, string]
const splitString = converge(splitAt, [midpoint, identity])

const main = pipe(
  readInput,
  map(splitString), //split string into even parts
  map(findit), //find the 1 common character across both strings
  unnest,
  map(el => alphaMap[el]), //convert to priorities (a-z = 1-26, A-Z = 27-52),
  reduce(add, 0),
  tap(console.log)
)

main('./input')