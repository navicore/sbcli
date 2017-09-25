const assert = require('assert')

const writeToQueue = (message) => {
  console.info(`writing\n${JSON.stringify(message, 0, 2)}`)
}

const readFromQueue = () => {
  console.info(`reading message`)
  return "I am a message"
}

module.exports = { writeToQueue, readFromQueue }

