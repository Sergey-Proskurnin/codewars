// Define n!! as

// n!! = 1 * 3 * 5 * ... * n if n is odd,

// n!! = 2 * 4 * 6 * ... * n if n is even.

// Hence 8!! = 2 * 4 * 6 * 8 = 384, there is no zero at the end. 30!! has 3 zeros at the end.

// For a positive integer n, please count how many zeros are there at the end of n!!.

// Example:

// 30!! = 2 * 4 * 6 * 8 * 10 * ... * 22 * 24 * 26 * 28 * 30
// 30!! = 42849873690624000 (3 zeros at the end)

//----------------------------------------------------------------------------------------
//---------------------------------Only--Test---------------------------------------------
function countZeros(n) {
    // console.log(n)
    let arr
    if (n % 2 === 0) {
        arr = [...Array(n + 1)].map((_, i) => ++i).filter(e => e % 2 === 0)
    }
    else { arr = [...Array(n + 1)].map((_, i) => ++i).filter(e => e % 2 !== 0) }
    const arrResult = arr.reduce((acc, el) => {
        acc *= el
        return acc
    }).toString().split('').reverse()
    console.log(arrResult)
    let result = 0
    for (let i = 0; arrResult[i] === '0'; ++i) {
        result += 1
    }
    return result
}

console.log(countZeros(8))
//0
console.log(countZeros(14))
//1
console.log(countZeros(30))
//3
console.log(countZeros(35)) //Sorry, it is a last argument for the solution
//4;