import {readFileSync} from 'fs'

function readInput (filePath) {
  return readFileSync(filePath, 'utf8').split("\n").slice(0, -1)
}

export {
  readInput
}