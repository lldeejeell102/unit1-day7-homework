/////////////////////////////////////////////////////////////
//  setAlarm

// 1st argument: employed (boolean true if are employed)
// 2nd argument: vacationing (boolean true if you are on vacation)

// write a function named setAlarm with two arguments
const setAlarm = (employed, vacationing) => {
// DRY code
    if (employed === true && vacationing === false){
        console.log(true);
    }else {
        console.log(false);
    }
    // if (employed === true && vacationing === true) {
    //     console.log(false);
    // }
    // else if(employed === false && vacationing === false)
    //     {
    //         console.log(false);
    //     }
    // else if(employed === false && vacationing === true)
    //     {
    //         console.log(false);
    //     }
    // else if(employed === true && vacationing === false)
    //     {
    //         console.log(true);
    //     }
}
setAlarm(false, true);

// Example outputs from Homework
// setAlarm(true, true) // => returns false
// setAlarm(false, false) // => returns false
// setAlarm(false, true) // => returns false
// setAlarm(true, false) // => returns true



/////////////////////////////////////////////////////////////
//  Count Odd Numbers


// Write a function named oddNumberCount
// receives one argument that should be a number
const oddNumberCount = (number) => {
    // keeps subtracting from number until 0
    
    // backwards loop
    // for (i = number - 1; i > 0; i--){
    //     // checks for odd number
    //     if(i % 2 !== 0){;
    //     console.log(i)
    //     }
    // }
    
    // forwards loop
    for (i = 0; number > i; i++){
        // checks for odd number
        if(i % 2 !== 0){;
        console.log(i)
        }
    }
}

oddNumberCount(7);
// return how many positive odd numbers there are below the number passed into the argument


// Example expected outputs
// oddNumberCount(7) // => returns 3 (because [1, 3, 5] are the positive odd numbers below 7)
// oddNumberCount(16) // => returns 8 (because [1, 3, 5, 7, 9, 11, 13, 15] are the positive odd numbers below 7)

/////////////////////////////////////////////////////////////
// Disemvoweling Trolls
// remove all vowels from the Troll's comments
// function trollsBeGone with 1 arguement (string)
// return a new string with all vowels removed from original string

// created an array of vowels
const vowels = ["a", "e", "i", "o", "u", "y"]
// created function to replace vowels to blanks
// let replacedPhrase = ""
// function trollBeGone (comment){
//     for (i = 0; i < comment.length; i++){

//     }
// }
const trollsBeGone = (comment) => {
        let replacedPhrase = comment.replaceAll(/aeiou/g, '')
        console.log(replacedPhrase)
}
trollsBeGone('This website is for losers LOL')
//function that takes apart the argument and if it's one of the array then replace it a space

//     let newPhrase = comment.replace(vowels,"")
//     console.log(newPhrase)
// }




//testing out replaceAll() method
// let phrase = "hello world"
// let censoredPhrase = phrase.replaceAll("o", "")
// console.log(censoredPhrase)





// Example expected outputs
// trollsBeGone("This website is for losers LOL") // => returns "Ths wbst s fr lsrs LL"


/////////////////////////////////////////////////////////////
// Bank Account Summary

// make an Object named bankInfo
// list all keys (savings, checking, moneyMarket, creditCard)
const bankInfo = {
    savings: 100,
    checking: 25,
    moneyMarket: 150, 
    creditCard: -75
}

// write a function called bankAccountSummary
// accepts your bankInfo objects as argument
let bankTotal = 0
function bankAccountSummary (savings, checking, moneyMarket, creditCard) {
    // calculate total of your bank accounts and returns it
    // save bankAccountSummary total into a variable called bankTotal
    bankTotal = bankInfo.savings + bankInfo.checking + bankInfo.moneyMarket + bankInfo.creditCard
    console.log(bankTotal)
}
bankAccountSummary()

function inTheRed (bankTotal) {
    if (bankTotal > 0){
        console.log(false)
    }else {
        console.log(true)
    }
}
inTheRed(bankTotal)


/////////////////////////////////////////////////////////////