function threeSum(arr, target) {
    arr.sort((a, b) => a - b);
    let closestSum = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length - 2; i++) {
        let j = i + 1;
        let k = arr.length - 1;
        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                closestSum = sum;
            }
            if (sum < target) {
                j++;
            } else if (sum > target) {
                k--;
            } else {
                return sum;
            }
        }
    }
    return closestSum;
}

module.exports = threeSum;
