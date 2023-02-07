// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

// Examples:
// a = "I like turtles"
// b = "I like turkeys"
// Result: 3

// a = "Hello World"
// b = "Hello World"
// Result: 0

// a = "espresso"
// b = "Expresso"
// Result: 2
// You can assume that the two input strings are of equal length.
function hamming(a,b) {
  const arrA = a.split('')
  const arrB = b.split('')
  
  return arrA.reduce((acc, el, i) => {
    if (el !==  arrB[i] ) {
      acc = acc + 1
    }
    return acc
  }, 0)
	// Implement me!
}
console.log(hamming("I like turtles","I like turkeys"))
console.log(hamming("Hello World","Hello World"))
console.log(hamming("hello world","hello tokyo"))
console.log(hamming("old father, old artificer","of my soul the uncreated "))