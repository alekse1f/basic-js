const CustomError = require('../extensions/custom-error')

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== 'string' ||
    isNaN(sampleActivity) ||
    0 >= sampleActivity ||
    15 < sampleActivity
  ) {
    return false
  }

  const k = 0.693 / HALF_LIFE_PERIOD
  const a = Math.log(MODERN_ACTIVITY / +sampleActivity)
  const result = a / k
  return Math.ceil(result)
}
