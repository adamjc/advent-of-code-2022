import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const path = (loc, file) => join(dirname(fileURLToPath(loc)), file)

function readInput (filePath) {
  console.log(filePath)
  return readFileSync(filePath, 'utf8').split("\n").slice(0, -1)
}

export {
  readInput,
  path
}