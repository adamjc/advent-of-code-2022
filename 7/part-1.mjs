import { pipe, tap } from "ramda"
import { readInput, path } from "../helpers.mjs"

function processCommand (cmd, tree, cwd) {
  if (cmd.match(/\$ cd .*/)) {
    const [_, dir] = cmd.match(/\$ cd (.*)/)
    if (dir === '..') cwd = cwd.split('/').slice(0, -1).join('/')
    else if (cwd === '') cwd = dir
    else if (cwd === '/') cwd = `/${dir}`
    else cwd = `${cwd}/${dir}`

    console.log(`cwd: ${cwd}`)
  }

  return {
    tree,
    cwd
  }
}

const main = pipe(
  readInput,
  cmds => {
    let tree = {}, cwd = ''
    while (cmds.length) {
      const result = processCommand(cmds[0], tree, cwd)
      tree = result.tree
      cwd = result.cwd
      cmds = cmds.slice(1)
    }
  },
  tap(console.log)
)

main(path(import.meta.url, './input'))