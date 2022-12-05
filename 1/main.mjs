import { tap, pipe, splitWhenever, equals, reduce, add, map, sort, subtract, reverse } from "ramda";
import { readInput } from "../helpers.mjs";

const main = pipe(
  readInput,
  splitWhenever(
    equals("")
  ),
  map(
    reduce(add, 0)
  ),
  sort(subtract),
  reverse,
  tap(console.log)
)

main('./input')