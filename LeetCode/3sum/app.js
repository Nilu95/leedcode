var threeSum = function (nums) {
  //   Sort the array:
  nums.sort(function (a, b) {
    return a - b;
  });
  console.log(nums);

  //   Loop through the array:
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    // Skip duplicates:
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    // Use two pointers
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // Skip duplicate elements
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  console.log(result);
  return result;
};

threeSum([-1, 0, 1, 2, -1, -4]);
