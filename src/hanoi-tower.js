const CustomError = require('../extensions/custom-error')

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  let turns = 2 ** diskNumber - 1
  let seconds = Math.floor((turns / turnsSpeed) * 3600)
  return {
    turns: turns,
    seconds: seconds,
  }
}
