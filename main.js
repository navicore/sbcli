#!/usr/bin/env node

const program = require('commander')

const { readFromQueue, writeToQueue } = require('./sb')

program
  .version('0.0.1')
  .description('read from and write to Azure Service Bus')

program
  .command('write <message>')
  .alias('w')
  .description('write a message')
  .action((message) => {
    writeToQueue({message})
  })

program
  .command('read')
  .alias('r')
  .description('read a message')
  .action(() => {
    readFromQueue()
  })

program.parse(process.argv)

