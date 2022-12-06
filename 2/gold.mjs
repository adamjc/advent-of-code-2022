// --- Part Two ---

// The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says how the round needs to end: X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

// The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:

//     In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
//     In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
//     In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.

// Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.

// Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?

import { tap, pipe, splitWhenever, equals, reduce, add, map, sort, subtract, reverse, take } from "ramda";
import { readInput } from "../helpers.mjs";

// x = lose = 0 points, y = draw = 3 points, z = win = 6 points
const points = {
  "A X": 3, // rock x lose = scissors = 0 + 3 points
  "B X": 1, // paper x lose = rock = 0 + 1 points
  "C X": 2, // scissors x lose = paper = 0 + 2 points
  "A Y": 4, // rock x draw = rock = 1 + 3 points
  "B Y": 5, // paper x draw = paper = 2 + 3 points
  "C Y": 6, // scissors x draw = scissors = 3 + 3 points
  "A Z": 8, // rock x win = paper = 2 + 6 points
  "B Z": 9, // paper x win = scissors = 3 + 6 points
  "C Z": 7, // scissors x win = rock = 1 + 6 points
}

const main = pipe(
  readInput,
  map(round => points[round]),
  reduce(add, 0),
  tap(console.log)
)

main('./input')