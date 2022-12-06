import { pipe, tap } from "ramda";
import { readInput } from "../helpers.mjs";

const main = pipe(
  readInput,
  tap(console.log)
)

main('./input')