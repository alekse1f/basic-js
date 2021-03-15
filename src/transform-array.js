const CustomError = require('../extensions/custom-error')

module.exports = function transform(arrIt) {
  throw new CustomError('Not implemented');
    // remove line with error and write your code here
  function init(arr, i, type) {
    if (typeof arr[i + type] === 'undefined' || arr[i + type] == '') {
      return false
    } else {
      return true
    }
  }


  if (!Array.isArray(arrIt)) {
     throw Error
  }

  let arr = arrIt.slice()
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (init(arr, i, 1)) {
          arr[i + 1] = ''
        }
        arr[i] = ''
        break
      case '--discard-prev':
        if (init(arr, i, -1)) {
          arr[i - 1] = ''
        }
        arr[i] = ''
        break
      case '--double-next':
        if (init(arr, i, 1)) {
          arr[i] = arr[i + 1]
        } else {
          arr[i] = ''
        }
        break
      case '--double-prev':
        if (init(arr, i, -1)) {
          arr[i] = arr[i - 1]
        } else {
          arr[i] = ''
        }
        break
    }
  }

  for(let i = arr.length - 1; i >= 0; i--) {
    if(arr[i] === '') {
        arr.splice(i, 1);
    }
}
  return arr.filter(Number)
}