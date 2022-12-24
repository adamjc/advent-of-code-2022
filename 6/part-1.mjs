import { add, equals, head, length, pipe, prepend, slice, tap, uniq, until } from "ramda";
import { readInput } from "../helpers.mjs";

const isUnique = ([_, input]) => pipe(
  slice(0, 4),
  uniq,
  length,
  equals(4),
)(input)

const sliceAndAdd = ([index, input]) => [index + 1, input.slice(1)]

const main = pipe(
  readInput,
  prepend(0),
  until(isUnique, sliceAndAdd),
  head,
  add(4),
  tap(console.log)
)

main('./input')