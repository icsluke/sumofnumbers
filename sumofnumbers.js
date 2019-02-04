// Attempt 1 - 30:36
// Attempt 2 - 12:46
// Attempt 3 - 26:00

const numbers = [0, 1, 2, 3, 4];

function sumFor(nums) {
  let sum = 0;
  for (const i of nums) {
    sum += nums[i];
  }
  return sum;
}

console.log(sumFor(numbers));

function sumWhile(nums) {
  let sum = 0;
  let i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(numbers));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(numbers));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(numbers));
