const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length
  },
  addLink(value = null) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chain.push(String(value))
    return this
  },
  removeLink(position) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (typeof position !== 'number' || !Number.isInteger(position) || position < 1 || position > this.chain.length) {
      this.chain = []
      throw Error
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse()
    return this
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    const result = this.chain.slice()
    this.chain = []
    return result.map(function(el) {
      if (el === null) {
        return '( )'
      } else {
        return '( ' + el + ' )'
      }
    }).join('~~')
  }
};

module.exports = chainMaker;
