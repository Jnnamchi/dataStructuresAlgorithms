// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //Option 1
  //return str.split('').reverse().join('');

  //Option 2
  /*
  let reversed = "";
  for (let char of str){
    reversed = char + reversed;
  }
  return reversed;*/

  //Solution 3
  debugger;
  return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('asdf');

module.exports = reverse;
