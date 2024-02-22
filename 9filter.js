const numbers = [1, 5, 6, 4, 15];
const playerss = [75, 65, 67, 72, 55, 59]
// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
// const selected = players.filter(p => p > 50);
const selectedd = playerss.filter(p => p % 2 === 1)
console.log(selectedd)

const friends = ['Tom', 'John', 'Micheal', 'Oliver', 'Tim', 'Joshna'];
const oddFriends = friends.filter(friend => friend.length < 4)
console.log(oddFriends)

const players = [75, 65, 67, 72, 55, 59];

// const selected = players.find(player => player > 70)
const selected = players.find(player => player > 70)
console.log(selected)

/**
 * 1. map 
 * 2. forEach
 * 3. filter 
 * 4. find
 * 5. reduce
*/