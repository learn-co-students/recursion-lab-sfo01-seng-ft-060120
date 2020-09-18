// Code your solution here!

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
        return myString[myString.length-1] + reverseString(myString.substring(0, myString.length-1))
    } else {
        return myString
    }
}

function isPalindrome(myString) {
    if (myString.length < 2) return true

    if (myString[0] === myString[myString.length-1]) {
        return isPalindrome(myString.substring(1, myString.length-1))
    } else {
        return false
    }
}

function addUpTo(array, index) {
    if (index > 0) {
        return addUpTo(array, index - 1) + array[index]
    } else {
        return array[index]
    }
}

function maxOf(array) {
    if (array.length === 1) {
        return array[0]
    } else {
        return Math.max(array[0], maxOf(array.slice(1,array.length)))
    }
}

function includesNumber(array, number) {
    if (array.length < 1) return false 

    if (array[0] === number) {
        return true
    } else {
        return includesNumber(array.slice(1, array.length), number)
    }
}