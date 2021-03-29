const CustomError = require('../extensions/custom-error')

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // throw new CustomError('Not implemented');
    // // remove line with error and write your code here

    if (Array.isArray(arr)) {
      return (
        arr.reduce((max, mas) => Math.max(max, this.calculateDepth(mas)), 0) + 1
      )
    } else {
      return 0
    }
  }
}
