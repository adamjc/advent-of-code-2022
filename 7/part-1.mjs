import { pipe, tap } from "ramda";
import { readInput, path } from "../helpers.mjs"

const main = pipe(
  readInput,
  tap(console.log)
)

main(path(import.meta.url, './input'))