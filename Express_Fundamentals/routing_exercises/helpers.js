function getMean(nums) {
    if(nums.length === 0) return 0;
      return nums.reduce(function (acc, cur) {
        return acc + cur;
      }) / nums.length
}

function convertToArray(obj) {
    let arr = [];

    for (let i = 0; i < obj.length; i++) {
        let toNum = Number(obj[i]);
        arr.push(toNum);
      }
    return arr;
}

function getMedian(nums) {
    nums.sort((a, b) => a - b);

    let middle = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        median = (nums[middle] + nums[middle - 1]) / 2;
    } else {
        median = nums[middle];
    }
    return median
}

function createFrequencyCounter(arr) {
  return arr.reduce(function(acc, next) {
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {});
}

function getMode(nums) {
  let freqCounter = createFrequencyCounter(nums);

  let count = 0;
  let mostFrequent;

  for (let key in freqCounter) {
    if (freqCounter[key] > count) {
      mostFrequent = key;
      count = freqCounter[key];
    }
  }
  return +mostFrequent;
}

module.exports = {
    convertToArray,
    getMean,
    getMedian,
    getMode
};