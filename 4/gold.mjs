import { equals, filter, map, pipe, split, tap, length, tail, dropLast } from "ramda";
import { readInput } from "../helpers.mjs";

// In how many pairs does one range fully contain the other?

// checks if any b is in a, or if any a is in b
const overlaps = ([[aLow, bLow], [aUp, bUp]]) => aLow <= bUp && aUp >= bLow;

// puts lower and upper bounds together
const parseBounds = pipe(
  split(','),
  ([a, b]) => [[
    Number(a.split('-')[0]),
    Number(b.split('-')[0])
  ], [
    Number(a.split('-')[1]),
    Number(b.split('-')[1])
  ]]
)

const main = pipe(
  readInput,
  map(pipe(parseBounds, overlaps)),
  filter(equals(true)),
  length,
  tap(console.log)
)

main('./input')