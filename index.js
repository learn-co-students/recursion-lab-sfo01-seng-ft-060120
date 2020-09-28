// Code your solution here!

function printString(myString) {
    // print first character, recursively moving from L -> R in string

    console.log(myString[0])

    if(myString.length > 1){
        let substring = myString.substring(1)
        printString(substring)
    }else{
        return true
    }

}

// printString("pizza")


function reverseString(myString) {
    if(myString.length >= 1){
        let substring = myString.substring(0, (myString.length - 1))
        return myString[myString.length - 1] + reverseString(substring) 
    }else{
        return ""
    }
}

// reverseString("pizza")


function isPalindrome(myString){

    if(myString.length >= 2){
        if(myString[0] == myString[myString.length - 1]){
            let substring = myString.substring(1, myString.length - 1)
            return isPalindrome(substring)
        }else{
            return false
        }
    }else{
        return true
    }
}

// isPalindrome("pizza")
// isPalindrome("racecar")
// isPalindrome("12344321")


function addUpTo(arr, idx) {
    // console.log(arr)
    if(arr.length > 1 && idx > 0){
        idx--
        let num = arr[0]
        return(addUpTo(arr.slice(1), idx) + num)
    }else{
        return arr[0]
    }
    
}

// addUpTo([1,2,3,4])


function maxOf(arr) {
    // check every pair
    // slice out non max
    // max should always be at arr[0]
    if(arr.length > 0){
        if(arr[0] < arr[1]){
            return maxOf(arr.slice(1))
        }
        else if(arr[0] > arr[1]){
            return maxOf([arr[0], ...arr.slice(2)])
        }else{
            return arr[0]
        }
    }
    return false
}

// maxOf([2,5,1,2,9,3])


function includesNumber(arr, element){
    if(element === arr[0]){
        return true
    }
    else{
        if(arr.length > 0){
            return includesNumber(arr.slice(1), element)
        }else{
            return false
        }
    }
}

// includesNumber(["hi", "no", "yep", "okay"], "no")