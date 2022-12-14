import { equals, filter, map, pipe, split, tap, length, tail, dropLast } from "ramda";
import { readInput } from "../helpers.mjs";

// In how many assignment pairs does one range fully contain the other?

// checks if b is bounded by a, or if a is bounded by b
const isBounded = ([[aLow, bLow], [aUp, bUp]]) => (aLow >= bLow && aUp <= bUp) || (bLow >= aLow && bUp <= aUp)

// puts lower and upper bounds together
const parseBounds = pipe(
  split(','),
  ([a, b]) => {
    return [[
      Number(a.split('-')[0]),
      Number(b.split('-')[0])
    ], [
      Number(a.split('-')[1]),
      Number(b.split('-')[1])
    ]]
  }
)

const main = pipe(
  readInput,
  tap(console.log),
  map(parseBounds),
  tap(console.log),
  map(isBounded),
  tap(console.log),
  filter(equals(true)),
  length,
  tap(console.log)
)

main('./input')