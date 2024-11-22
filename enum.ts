const small = 1;
const mediam = 2;
const large = 3;

 const enum Size {
 SMALL = 'A',
 MEDIAM = 'B',
 LARGE = 'C'
}

//  const enum Size {
//  SMALL = 10,
//  MEDIAM = 'a',
//  LARGE ='b'
// }

const mySize = Size.SMALL;

console.log(Size.SMALL)
console.log(Size.MEDIAM)
console.log(Size.LARGE)
console.log(mySize)