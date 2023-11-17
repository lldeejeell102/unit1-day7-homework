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
const trollsBeGone = (trollsComment) => {
    // created new variable to print updated string
    let updatedTrollsComment
    for (i = 0; i < vowels.length; i++){
        updatedTrollsComment = trollsComment.replace(vowels[i], "")
    }
        console.log(updatedTrollsComment)
}
        
    
trollsBeGone("you suck");


/*
testing out replace() method
let phrase = "hello world"
let censoredPhrase = phrase.replace("h", " ")
console.log(censoredPhrase)
*/




// Example expected outputs
// trollsBeGone("This website is for losers LOL") // => returns "Ths wbst s fr lsrs LL"
