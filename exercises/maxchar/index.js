// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let theKey = '';
    let max = 0;
    const chars = {};
    for (let char of str){
      chars[char] = chars[char] + 1 || 1;
    }

    //Object.keys(chars).reduce(function(a, b){ return chars[a] > chars[b] ? a : b });

    for (let char in chars){
      if (chars[char] > max){
        max = chars[char];
        theKey = char;
      }
    }
    console.log(str);
    console.log(chars);
    return theKey;

}

module.exports = maxChar;
