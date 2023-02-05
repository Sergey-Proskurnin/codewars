// You are organizing an olympiad and would like to create an algorithm to determine the podium. Simple, isn't it!?
// An olympiad is a tournament with few rounds. Each round brings more or less points to the players. Good luck!

// Input
// A score object, containing the scores of all players for each round. For exemple:

// {
//   'Emy': [8, 12, 1],    // Emy scored 8 points in the first round, 12 points in the second and 1 point in the third.
//   'Paul': [2, 6, -9],   // Paul scored 2 points in the first round, 6 points in the second and -9 points in the third.
//   'Sandra': [3, 9, 7],  // Sandra scored 3 points in the first round, 9 points in the second and 7 points in the third.
//   'Sue': [10, 2, 0],    // ...
//   'Yseult': [8, 9, 3]
// }
// Your task
// Return the podium in this form:

// {
//   'gold': {
//     'score': 21,
//     'players': ['Emy']
//   },
//   'silver': {
//     'score': 20,
//     'players': ['Yseult']
//   },
//   'bronze': {
//     'score': 19,
//     'players': ['Sandra']
//   }
// }
// Rules
// The best players are those with the most points accumulated.
// In each round, players can score positive or negative points (between -100 and 100).
// There may be a tie (Example 2).
// Tied players share their medal (Example 2).
// Names of tied players must be sorted in alphabetical order (Example 2).
// When there is a tie, the following medal(s) are not awarded, like at the Olympic Games (Example 3).
// Players are not required to participate in all rounds (Example 4).
// If a player does not participate in any round, his scores is an empty array []. He is declared forfeit and cannot be on the podium (Example 4).
// If by misfortune, there is no one on the podium. The olympiad is cancelled. Return {}.
// Examples
// Example 1
// Input

// {
//   'Emy': [8, 12, 1],    // Emy scored a total of 21 points
//   'Paul': [2, 6, -9],   // Paul scored a total of -1 point
//   'Sandra': [3, 9, 7],  // Sandra scored a total of 19 points
//   'Sue': [10, 2, 0],    // Sue scored a total of 12 points
//   'Yseult': [8, 9, 3]   // Yseult scored a total of 20 points
// }
// Output

// {
//   'gold': {
//     'score': 21,
//     'players': ['Emy']
//   },
//   'silver': {
//     'score': 20,
//     'players': ['Yseult']
//   },
//   'bronze': {
//     'score': 19,
//     'players': ['Sandra']
//   }
// }
// Example 2
// Input

// {
//   'Emy': [8, 12, 1],    // Emy scored a total of 21 points
//   'Sandra': [4, 6, 9],  // Sandra scored a total of 19 points
//   'Paul': [3, 9, 7],    // Paul scored a total of 19 points
//   'Sue': [10, 2, 0],    // Sue scored a total of 12 points
//   'Yseult': [8, 9, 3]   // Yseult scored a total of 20 points
// }
// Output

// {
//   'gold': {
//     'score': 21,
//     'players': ['Emy']
//   },
//   'silver': {
//     'score': 20,
//     'players': ['Yseult']
//   },
//   'bronze': {
//     'score': 19,
//     'players': ['Paul', 'Sandra']
//   }
// }
// Example 3
// Input

// {
//   'Emy': [8, 12, 1],    // Emy scored a total of 21 points
//   'Paul': [2, 6, 7],    // Paul scored a total of 15 points
//   'Sandra': [3, 9, 7],  // Sandra scored a total of 19 points
//   'Sue': [10, 11, 0],   // Sue scored a total of 21 points
//   'Yseult': [8, 9, 3]   // Yseult scored a total of 20 points
// }
// Output

// {                   // No silver medal!
//   'gold': {
//     'score': 21,
//     'players': ['Emy', 'Sue']
//   },
//   'bronze': {
//     'score': 20,
//     'players': ['Yseult']
//   }
// }
// Example 4
// Input

// {
//   'Emy': [12],      // Emy scored a total of 12 points
//   'Sandra': [],     // shall be declared forfeited
//   'Sue': [0, 0]     // Sue scored a total of 0 point
// }
// Output

// {
//   'gold': {
//     'score': 12,
//     'players': ['Emy']
//   },
//   'silver': {
//     'score': 0,
//     'players': ['Sue']
//   }
// }

function podium(scores){
  
  if (Object.keys(scores).length === 0 || Object.values(scores).filter(el => el.length !== 0).length === 0) {
    return {}
  }
  const scores2 = scores
  const podium = {
    'gold': {
    'score': null,
    'players': []
  },
  'silver': {
    'score': null,
    'players': []
  },
  'bronze': {
    'score': null,
    'players': []
  }
  }
  for (const key in scores2) {
    if(scores2[key].length !== 0){
      scores2[key] = scores2[key].reduce((acc, el) => acc + el, 0)
    }
    
    scores2[key]
  }
  
  const arrPlayers = Object.entries(scores2).filter(el => el.length > 0).sort((a,b) =>b[1]-a[1] ).filter(el => !Array.isArray(el[1]))
  const podiumGold = arrPlayers.filter((el, i, arr) => el[1] === arr[0][1])
  const podiumSilver = arrPlayers.filter((el, i, arr) => el[1] !== arr[0][1]).filter((el, i, arr) => el[1] === arr[0][1] )
  const podiumBronze = arrPlayers.filter((el, i, arr) => el[1] !== arr[0][1]).filter((el, i, arr) => el[1] !== arr[0][1]).filter((el, i, arr) => el[1] === arr[0][1])
  const podiumGoldPlayers = podiumGold.reduce((acc, el) => {
    acc.push(el[0])
  return acc}, []).sort()
  const podiumSilverPlayers = podiumSilver.reduce((acc, el) => {
    acc.push(el[0])
  return acc}, []).sort()
  const podiumBronzePlayers = podiumBronze.reduce((acc, el) => {
    acc.push(el[0])
  return acc}, []).sort()
  const podiumGoldScore = podiumGold[0][1]
  const podiumSilverScore = podiumSilver.length !== 0 ?podiumSilver[0][1] :0
  const podiumBronzeScore = podiumBronze.length !== 0 ? podiumBronze[0][1] :0
    
  if ((podiumGoldPlayers.length === 1 && podiumSilver.length === 0 && podiumBronze.length === 0) || (podiumGoldPlayers.length >= 3)){
    podium.gold.score = podiumGoldScore
    podium.gold.players = podiumGoldPlayers
    delete podium.bronze
    delete podium.silver
return podium
  }
  if ((podiumGoldPlayers.length === 1 && podiumSilverPlayers.length >= 2 ) ||
      (podiumSilverPlayers.length === 1  && podiumBronze.length === 0) ||
      (podiumGoldPlayers.length === 1 && podiumSilverPlayers.length === 1  && podiumBronze.length === 0 )) {
    podium.gold.score = podiumGoldScore
    podium.gold.players = podiumGoldPlayers
    podium.silver.score = podiumSilverScore
    podium.silver.players = podiumSilverPlayers
    delete podium.bronze
    
return podium
  }
    if (podiumGoldPlayers.length === 2){
    podium.gold.score = podiumGoldScore
    podium.gold.players = podiumGoldPlayers
    podium.bronze.score = podiumSilverScore
    podium.bronze.players = podiumSilverPlayers
    delete podium.silver
return podium
  }
    
    podium.gold.score = podiumGoldScore
    podium.gold.players = podiumGoldPlayers
    podium.silver.score = podiumSilverScore
    podium.silver.players = podiumSilverPlayers
    podium.bronze.score = podiumBronzeScore
    podium.bronze.players = podiumBronzePlayers
  return podium
    
}
 const exemple1 = {
  'Emy': [8, 12, 1],    // Emy scored a total of 21 points
  'Paul': [2, 6, -9],   // Paul scored a total of -1 point
  'Sandra': [3, 9, 7],  // Sandra scored a total of 19 points
  'Sue': [10, 2, 0],    // Sue scored a total of 12 points
  'Yseult': [8, 9, 3]   // Yseult scored a total of 20 points
}

console.log(podium(exemple1))
