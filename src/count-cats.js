const CustomError = require('../extensions/custom-error')

module.exports = function countCats(arr) {
  let result = arr.reduce((sum, item) => {
    let cats = 0
    for (i = 0; i < item.length; i++) {
      cats += item[i] == '^^' ? 1 : 0
    }
    return sum + cats
  }, 0)
  return result
}
