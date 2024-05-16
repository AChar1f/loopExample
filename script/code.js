// for( let i = 1; i <= 10; i++) {
//     console.log(i); 
// }

//For loop: Creates a loop for data. Used to organise known data.
let numbers = [9, 3, 11, 4, 7, 12] //size of array is 6. due to the way computers count we need to use -1 to end at the last position of the array.
// for (let i = 0; i <= numbers.length -1; i++) {
//     if (numbers[i] % 2 == 0) {      // displays even numbers display. Change the == to >= and change 0 to 1 for odd numbers. The %2 == 0 will search the indexes for divisible by 2 that have no remainders and display them.
//         console.log(numbers[i])
//     }
// if (numbers[i] == 11) {
//      continue
//}
// }
// for (let i = 0; i < numbers.length -1; i += 2) {    incrument of 2
//     console.log(numbers[i])
// }
// for (let i = 0; i < numbers.length; i++) {
//     console.log(`${numbers[i]} is at position ${i}`)
// }

//while: alt to for loop. Used when the end of data is not known. cnt++ incruments the count by 1 each time without it the loop is infinite on the specified number index.
// let cnt = 0 
// while (cnt < numbers.length) {
//     console.log(numbers[cnt])
//     cnt++
// }

//For in loop. We dont need to specify a starting point. in(short for index). Just initilize a variable.
// for (let n in numbers) {
//     console.log(`Element: ${numbers[n]}, is at position Index: ${n}`)
// }

