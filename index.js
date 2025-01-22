// create a prompt that gets numbers seperated by commas
// create an empty array
// take userInput and turn it into array
// convert strings to numbers
// create functions that will be passed in the array
// getLength
//getSum
//getMean
//getMin
//getMax
//getRange
//getEvens
//getOdds



const userInput = prompt(`Enter some numbers seperated by commas`);
const userNumbers = userInput.split(`,`);
const numbers = [];
for(let indexCounter = 0; indexCounter < userNumbers.length; indexCounter = indexCounter + 1){
const userNumberAsString = userNumbers[indexCounter];
const userNumberAsNumber = Number(userNumberAsString)
numbers.push(userNumberAsNumber);
//console.log(userNumberAsNumber);
}
const getLength = (numbers) => numbers.length;
alert(`your length is ` + getLength(numbers));

const getSum = (numbers) => {
  let sum = 0
  for(let i=0; i< numbers.length; i++){
sum += numbers[i];
  }
  return sum
}
console.log(getSum(numbers));

const getMean = (numbers) => {
  return getSum(numbers) / getLength(numbers);
}
console.log(getMean(numbers));

const getMin = (numbers) => {
let smallest
for(let i=0; i<numbers.length; i++){
  if( i=== 0 || smallest > numbers[i]){
    smallest = numbers[i]
  }
}
return smallest
}
//console.log(getMin(numbers));

const getMax = (numbers) => {
  let largest
  for(let i=0; i<numbers.length; i++){
    if( i=== 0 || largest > numbers[i]){
      largest = numbers[i]
    }
  }
  return largest
  }
  console.log(getMax(numbers));


const getEvens = (numbers) => {
  let evens = [];
for(let i=0; i<numbers.length; i++){
  if(number[i] % 2 === 0){
  
  }
}
return evens
}

//  const get___  = () => {
//  } 