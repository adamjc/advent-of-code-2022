import { add, map, pipe, reduce, tap } from "ramda";
import { readInput } from "../helpers.mjs";

const points = {
  "A X": 4, // rock x rock = draw = 4 points
  "B X": 1, // paper x rock = lose = 1 points
  "C X": 7, // scissors x rock = win = 7 points
  "A Y": 8, // rock x paper = win = 8 points
  "B Y": 5, // paper x paper = draw = 5 points
  "C Y": 2, // scissors x paper = lose = 2 points
  "A Z": 3, // rock x scissors = lose = 3 points
  "B Z": 9, // paper x scissors = win = 9 points
  "C Z": 6, // scissors x scissors = draw = 6 points
}

const main = pipe(
  readInput,
  map(round => points[round]),
  reduce(add, 0),
  tap(console.log)
)

main('./input')