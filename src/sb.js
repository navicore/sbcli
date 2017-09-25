const Promise = require('bluebird')
const azure = require('azure')
const serviceBusService = azure.createServiceBusService(process.env.CONNSTR)
const service = Promise.promisifyAll(serviceBusService)

const topicOptions = {
  MaxSizeInMegabytes: '1024',
  DefaultMessageTimeToLive: 'PT5M'
}

const writeToQueue = (topic, message) => {
  console.info(`writing\n${JSON.stringify(message, 0, 2)}`)
  return service.createTopicIfNotExistsAsync(topic, topicOptions)
  .then(() => service.sendTopicMessageAsync(topic, message))
}

const readFromQueue = topic => {
  console.info(`reading message`)
  const promise = new Promise((resolve, reject) => {
    resolve('I am a message!')
  })
  return promise
}

module.exports = { writeToQueue, readFromQueue }
