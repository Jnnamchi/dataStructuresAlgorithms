// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i <= str.length - 1; i++){
    if (str[i - 1] === ' '){
      result += str[i].toUpperCase();
    } else {
      result += str[i]
    }
  }

  return result;

}

module.exports = capitalize;



/*
Solution 1

finall = str.split(' ');

for (let i = 0; i <= finall.length - 1; i++){
  finall[i] = finall[i].charAt(0).toUpperCase() + finall[i].slice(1);
}

return finall.join(' ');

*/
