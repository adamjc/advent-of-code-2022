import { add, equals, head, length, pipe, prepend, slice, tap, uniq, until } from "ramda";
import { readInput } from "../helpers.mjs";

const requiredNumUniques = 14

const isUnique = ([_, input]) => pipe(
  slice(0, requiredNumUniques),
  uniq,
  length,
  equals(requiredNumUniques),
)(input)

const sliceAndAdd = ([index, input]) => [index + 1, input.slice(1)]

const main = pipe(
  readInput,
  prepend(0),
  until(isUnique, sliceAndAdd),
  head,
  add(requiredNumUniques),
  tap(console.log)
)

main('./input')