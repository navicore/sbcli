#!/usr/bin/env node

const program = require('commander')

const { readFromQueue, writeToQueue, writeToTopic } = require('./sb')

program
  .version('0.0.1')
  .description('IMPORTANT: set env var CONNSTR= to a Service Bus Connection String. See Shared access policies.')

program
  .command('publish <topic> <message>')
  .alias('p')
  .description('write a message')
  .action((topic, message) => {
    writeToTopic(topic, {body: message})
      .catch((error) => {
        console.info(`got: ${error}`)
      })
  })

program
  .command('write <queue> <message>')
  .alias('w')
  .description('write a message')
  .action((queue, message) => {
    writeToQueue(queue, {body: message})
      .catch((error) => {
        console.info(`got: ${error}`)
      })
  })

program
  .command('read <queue>')
  .alias('r')
  .description('read a message')
  .action((queue) => {
    readFromQueue(queue)
      .then((result) => {
        console.info(`${JSON.stringify(result, 0, 2)}`)
      })
      .catch((error) => {
        console.error(`ERROR:\n${JSON.stringify(error, 0, 2)}`)
      })
  })

program.parse(process.argv)
