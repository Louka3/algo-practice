/**
 
 Top K Elements in List

Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]

Example 2:

Input: nums = [7,7], k = 1

Output: [7]

Constraints:

    1 <= nums.length <= 10^4.
    -1000 <= nums[i] <= 1000
    1 <= k <= number of distinct elements in nums.
 
 */

// attempt 1. No care for time complexity
// class Solution {
//     /**
//      * @param {number[]} nums
//      * @param {number} k
//      * @return {number[]}
//      */
//     topKFrequent(nums, k) {
//       const output = [];
//       const keys = [];
//       const cache = {};
//       for(const num of nums){
//         if(!cache[num]){
//           cache[num] = 1;
//           keys.push(num);
//         }
//         else{
//           cache[num] += 1;
//         }
//       }
//       while(output.length < k){
//         let mostFrequent = keys[0];
//         let index = 0;
//         for(let i = 1; i < keys.length; i++){
//           if(cache[keys[i]] > cache[String(mostFrequent)]){
//             mostFrequent = keys[i];
//             index = i;
//           }
//         }
//         output.push(mostFrequent);
//         keys.splice(index, 1);
//       }

//       return output;
//     }
// }

// refactored attempt
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
      const frequencyMap = new Map();
      
      // Count frequencies
      for (const num of nums) {
          frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
      }
      
      // Convert map to array and sort by frequency
      const sortedByFrequency = Array.from(frequencyMap.entries()).sort((a, b) => b[1] - a[1]);
      
      // Extract the top k elements
      return sortedByFrequency.slice(0, k).map(([num, _]) => num);
      // just learned about the _. Basically, its used to indicate that we know
      // there will be a value here, but we will not use it or need it at all. 
      // basically a placeholder for the destructuring
  }
}
    

const test = new Solution();
console.log(test.topKFrequent([1, 2, 2, 3, 3, 3], 2)); // [2, 3]
console.log(test.topKFrequent([7, 7], 1)); // [7]
