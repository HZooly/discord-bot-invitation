#!/usr/bin/env node

const readline = require('readline')
const cb = require('clipboardy')
const eol = require('os').EOL

console.reset = () => return process.stdout.write('\033c')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("What is your Discord Bot Client ID ? ", (res) => {
  console.reset()
  const output = `https://discordapp.com/oauth2/authorize?&client_id=${res}&scope=bot`
  console.log(`${eol}Your Discord Bot invitation link is : ${output}${eol}`)
  console.log('This link is now in your clipboard !')
  cb.writeSync(output)
  rl.close()
})
