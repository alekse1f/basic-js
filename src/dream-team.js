const CustomError = require('../extensions/custom-error')

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) {return false}
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string' && arr[i].length > 0) {
      let name = arr[i].replace(/ +/g, ' ').trim()
      result.push(name[0].toUpperCase())
    }
  }
  return result.sort().join('')
}
