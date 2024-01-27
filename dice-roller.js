const numOfDiceRollsString = process.argv[2]; // self reminder: always start at index 2 for command line args !!!!!
const numOfDiceRolls = Number(numOfDiceRollsString); // convert to number


const rollDice = function(diceRolled) {
  const results = []; // initialize empty array to store reults of dice rolls
  for (let i = 0; i < diceRolled; i++) { // iterates dice rolled
    const rollResult = Math.floor(Math.random() * 6) + 1; // generate random numer between 1 and 6 (refer to mdn doc)
    results.push(rollResult); 
  }
  return results; // return results of all the dice rolls
};

console.log(`Rolled ${numOfDiceRolls} dice: ${rollDice(numOfDiceRolls).join(', ')}`);