// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, stair = '') {
//bottom length is 2n - 1
//top spaces is (n - 1)x2
  if (n === row){
    return;
  }

  if ((2*n - 1) === stair.length){
    console.log(stair);
    return pyramid(n, row + 1);
  }

  const add = (stair.length >= (n - row - 1) && stair.length < (n + row)) ? '#' : ' ';

  pyramid(n, row, stair + add);

}

module.exports = pyramid;
