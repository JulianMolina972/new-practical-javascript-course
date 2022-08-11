
const numbers = [1,2,3,4,5,6,7,8,1222,13333,9222,2,2,2,10,11,2,12,1,100000000]
const numbersSorted = numbers.sort((a, b) => a - b)
console.log(numbersSorted)
//Average
const arrLgth = numbersSorted.length
const average = numbersSorted.reduce((a, b) => (a + b)) / arrLgth
console.log(average)

//median
if(arrLgth % 2 === 0){
  const medianPair = numbersSorted.slice((arrLgth / 2) - 1,(arrLgth / 2) + 1).reduce((a, b) => a + b) / 2
  console.log(medianPair)
} else {
  
  const medianOdd = numbersSorted.slice((arrLgth / 2),(arrLgth / 2) + 1)
  console.log(...medianOdd)
}

//mode 

const emojis = ['🍕','🍔','🍔','🍔','🍔','🍔','🌭','🌭','🍟','🥞','🥪','🥙','🍣','🍕']

const mode = null
console.log(mode);





