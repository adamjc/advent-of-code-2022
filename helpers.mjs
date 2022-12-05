import {readFileSync} from 'fs'

function readInput (filePath) {
  return readFileSync(filePath, 'utf8').split("\n")
}

export {
  readInput
}