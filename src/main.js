#!/usr/bin/env node

// Endpoint=sb://akkademo.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=C+2I/kdR6qKWL6MdNJbHG0HGcBcOjkWhUUDLeOWtxh8=

const program = require('commander')

const { readFromQueue, writeToQueue } = require('./sb')

program
  .version('0.0.1')
  .description('read from and write to Azure Service Bus')

program
  .command('write <topic> <message>')
  .alias('w')
  .description('write a message')
  .action((topic, message) => {
    writeToQueue(topic, {message})
      .catch((error) => {
        console.info(`got: ${error}`)
      })
  })

program
  .command('read')
  .alias('r')
  .description('read a message')
  .action(() => {
    readFromQueue()
      .then((result) => {
        console.info(`got: ${result}`)
      })
      .catch((error) => {
        console.info(`got: ${error}`)
      })
  })

program.parse(process.argv)
