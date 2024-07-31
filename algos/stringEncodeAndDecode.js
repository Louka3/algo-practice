/**
 String Encode and Decode

Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]

Example 2:

Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]

Constraints:

    0 <= strs.length < 100
    0 <= strs[i].length < 200
    strs[i] contains only UTF-8 characters.

  
 */

//? First attempt ----------------------------------------------------

// class Solution {
//   /**
//    * @param {string[]} strs
//    * @returns {string}
//    */
//   encode(strs) {
//       let endingString = '';
//       let combinedString = '';
//       for(const str of strs){
//         combinedString += str;
//         endingString += `%${str.length}`
//       }
//       //* the asterisk will denote the start of the encoding
//       return combinedString + '*' + endingString
//   }

//   /**
//    * @param {string} str
//    * @returns {string[]}
//    */
//   decode(str) {
//     const index = str.indexOf('*');
//     const newStr = str.slice(0, index);
//     const hashed = str.slice(index + 2).split('%');
//     let currentIndex = 0
//     const result = [];
//     console.log(hashed)
//     for(let i = 0; i < hashed.length; i++){
//       result.push(newStr.slice(currentIndex, currentIndex + Number(hashed[i])));
//       currentIndex += Number(hashed[i]);
//     }
//     return result;
//   }
// }

//? Refactored attempt.

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs){
  return strs.reduce((accu, str) => accu + `${str}|`, '')
};

  /**
   * @param {string} str
   * @returns {string[]}
   */
 decode(str){
  const result = str.split('|');
  result.pop();
  return result;
  };
}


const test = new Solution();
const original = ["neet","code","love","you"];
console.log('Original:', original);
const encoded = test.encode(original);
console.log('Encoded:', encoded);
console.log('Decoded:',  test.decode(encoded));