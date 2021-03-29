const CustomError = require('../extensions/custom-error')

module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options

  str = String(str)
  addition = String(addition)
  function repMini(s, t, a) {
    let result = []
    for (let i = 1; i <= t; i++) {
      result.push(s)
    }
    return result.join(a)
  }
  const resAddition = repMini(addition, additionRepeatTimes, additionSeparator)
  return repMini(str + resAddition, repeatTimes, separator)
}
