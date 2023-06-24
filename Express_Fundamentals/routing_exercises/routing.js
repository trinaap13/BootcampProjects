const express = require('express');

const app = express();
app.use(express.json());
const { convertToArray, getMean, getMedian, getMode } = require('./helpers');
const ExpressError = require('./expressError');


app.get('/mean', (req, res) => {
    const nums = req.query.nums.split(',');

    let numArray = convertToArray(nums);
    if (numArray instanceof Error) {
        throw new ExpressError(numArray.message);
      }

    let result = {
        operation: "mean",
        result: getMean(numArray)
      }

    return res.send(result);
})


app.get('/median', function(req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }
  let nums = req.query.nums.split(',');

  let numsAsArray = convertToArray(nums);
  if (numsAsArray instanceof Error) {
    throw new ExpressError(numsAsArray.message);
  }

  let result = {
    operation: "median",
    result: getMedian(numsAsArray)
  }

  return res.send(result);
});


app.get('/mode', function(req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }
  let nums = req.query.nums.split(',');
  let numArray = convertToArray(nums);
  if (numArray instanceof Error) {
    throw new ExpressError(numArray.message);
  }

  let result = {
    operation: "mode",
    result: getMode(numArray)
  }

  return res.send(result);
});

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});

app.listen(3000, function() {
    console.log('App on port 3000')
});