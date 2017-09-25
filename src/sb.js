const Promise = require('bluebird')
const azure = require('azure')
const serviceBusService = azure.createServiceBusService(process.env.CONNSTR)
const service = Promise.promisifyAll(serviceBusService)

const options = {
  MaxSizeInMegabytes: '1024',
  DefaultMessageTimeToLive: 'PT5M'
}

const writeToQueue = (queue, message) => {
  return service.createQueueIfNotExistsAsync(queue, options)
  .then(() => service.sendQueueMessageAsync(queue, message))
}

const writeToTopic = (topic, message) => {
  return service.createTopicIfNotExistsAsync(topic, options)
  .then(() => service.sendTopicMessageAsync(topic, message))
}

const readFromQueue = queue => service.receiveQueueMessageAsync(queue)

module.exports = { writeToQueue, writeToTopic, readFromQueue }
