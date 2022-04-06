// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let word = '';
//   for(let i = 0; i < str.length ; i++){
//     word += str[ str.length - (i + 1)] ;
//   }
//   return word;
// }

// function reverse(str){
// return  str.split('').reduce((l1, l2) => l2 + l1, '')
// }

// function reverse(str){
//   return  str.split('').reverse().join('');
//   }

function reverse(str){
  let reversed = '';
  for(let char of str){
    debugger;
    reversed = char + reversed;
  }
  return reversed;
}

reverse('alpha');
module.exports = reverse;
