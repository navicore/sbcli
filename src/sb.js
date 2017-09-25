const Promise = require('bluebird')
const azure = require('azure')

const service = () => Promise.promisifyAll(azure.createServiceBusService(process.env.CONNSTR || ''))

const options = {
  MaxSizeInMegabytes: '1024',
  DefaultMessageTimeToLive: 'PT5M'
}

const writeToQueue = (queue, message) => {
  const svc = service()
  return svc.createQueueIfNotExistsAsync(queue, options)
  .then(() => svc.sendQueueMessageAsync(queue, message))
}

const writeToTopic = (topic, message) => {
  const svc = service()
  return svc.createTopicIfNotExistsAsync(topic, options)
  .then(() => svc.sendTopicMessageAsync(topic, message))
}

const readFromQueue = queue => service().receiveQueueMessageAsync(queue)

module.exports = { writeToQueue, writeToTopic, readFromQueue }
