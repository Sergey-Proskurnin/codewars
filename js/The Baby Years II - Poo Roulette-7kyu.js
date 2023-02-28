// The trouble is that your partner is also smelly...

// You will be given a 2-dimensional array (p) that looks similar to below. Empty spots are represented by 'o' and your baby's bottom is represented by 'B'. Any scent is represented by '~'.

// Example 1: Baby smell

// [
// [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', 'B', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// ]
// Example 1: Partner smell

// [
// [ 'B', '~', '~', '~', 'o', 'o', 'o'],
// [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// [ 'o', 'o', 'o', 'o', 'o', 'o', 'o']
// ]
// If the smell is rising vertically, it's safe to say it's coming from the baby - return "Get the wipes!". If the smell is moving horizontally.. it's probably your partner trying to pass it off as the baby - return "You disgust me!". in both cases the three scents must be connected to the baby.

// If there is no scent, or there are less than three in a row, there is no baby, or they do not form a straight vertical of horizontal line, return "Calm before the storm".

// Lines of scent cannot pass through the baby (or if they do they dont count).

function pooRoulette(p) {
  console.log(p)
  let index1
  let index2
 if ((p.map(e => e.join('')).filter(e => e.includes('B~~~')).length === 1) 
    || (p.map(e => e.join('')).filter(e => e.includes('~~~B')).length === 1)) {
      return "You disgust me!"
  }
  
  p.forEach((e, i) => {
    if (e.includes('B')) {
      index1 = i
      index2 = e.indexOf('B')
    }
    } )
  if ( index1 > 2 &&
      p[index1][ index2] === 'B' &&
      p[index1-1][ index2] ==='~' &&
      p[index1-2][ index2]==='~' &&
      p[index1-3][ index2]==='~') {
    return "Get the wipes!"
  }
  
return "Calm before the storm"
}

console.log(pooRoulette([
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'B', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
]))
    //"Get the wipes!"
console.log(pooRoulette([
    [ 'B', '~', '~', '~', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o']
    ]))
    // "You disgust me!"
console.log(pooRoulette([
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', '~', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', '~', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', '~', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'B', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o']
    ]))
    // "Calm before the storm"
console.log(pooRoulette([
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', '~', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', '~', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', '~', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'B', 'o', '~', '~', '~'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o']
    ]))
    //"Calm before the storm"