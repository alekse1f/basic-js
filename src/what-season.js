const CustomError = require('../extensions/custom-error')

module.exports = function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!'
  } else if (
    isNaN(date) ||
    typeof date != 'object'
  ) {
    throw new Error()
  }

  let m = date.getMonth()
  let result = ''
  switch (m) {
    case 11:
    case 0:
    case 1:
      result = 'winter'
      break
    case 2:
    case 3:
    case 4:
      result = 'spring'
      break
    case 5:
    case 6:
    case 7:
      result = 'summer'
      break
    default:
      result = 'autumn'
  }
  return result
}
