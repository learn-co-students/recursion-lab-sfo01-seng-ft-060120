function printString(myString) {

    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }

}

function reverseString(myString) {

    if (myString.length > 1) {
      return reverseString(myString.substring(1)) + myString[0];
    } else {
      return myString;
    }

}

function isPalindrome(myString) {
  
    while (myString.length > -1) {
      console.log(myString)
      if (myString.length < 2) {
        return true
      } else if (myString[0] === myString[myString.length-1]) {
        return isPalindrome(myString.slice(1, myString.length-1))
      } else {
        return false
      }
    }
  
}

function addUpTo(numbers, index) {

    return index ? numbers[index] + addUpTo(numbers, --index) : numbers[index];
  
}

function maxOf(numbers) {

    console.log(numbers)
  
      if (numbers.length > 1) {
        return numbers[0] > numbers[numbers.length - 1] ? numbers = maxOf(numbers.splice(0, (numbers.length-1))) : numbers = maxOf(numbers.splice(1))
      }
    
      return numbers
      
  }

function includesNumber(array, element) {
  
    if (array.length > 0 ) {
      return array[0] === element ? true : array = includesNumber(array.slice(1), element)
    } else {
      return false
    }
  
}