// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function  anagrams(stringA, stringB){
 return cleanStr(stringA) === cleanStr(stringB);
}

const cleanStr = function(str){
  return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

// const mappingStr = function(str){
//   const cleanStr = str.replace(/[^\w]/g, "").toLowerCase();
//    const chars={};
//    for(let char of cleanStr){
//      chars[char] = chars[char]+1 || 1;
//    }
//    return chars;
//  }

// function anagrams(stringA, stringB) {

  
  
//   const aMapstr = mappingStr(stringA);
//   const bMapstr = mappingStr(stringB);

//   if(Object.keys(aMapstr).length !== Object.keys(bMapstr).length){
//     return false;
//   }

//   for(char in aMapstr){
//     if(aMapstr[char] !== bMapstr[char]){
//       return false;
//     }
//   }

//  return true;
  
// }