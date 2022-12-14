import { pipe, tap } from "ramda";
import { readInput } from "../helpers.mjs";

// In how many assignment pairs does one range fully contain the other?

const main = pipe(
  readInput,
  tap(console.log)
)

main('./input')