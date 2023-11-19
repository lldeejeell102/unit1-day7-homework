// testing connection
console.log("hello world")

// empty object
// let words = {
//     number: " ",
//     adjective: " ",
//     pluralNoun: " ",
//     adverb: " ",
//     anotherAdjective: " "
// }

// loop that prompts user for each entry needed
// then assigns them to the correct object & element
// const startMadLib = () => {
//     for (let word in words) {
//         const answer = prompt(`Please input ${word}`);
//         words[word] = answer
//     };
//     console.log(words)
//     completedMadLibs();
// }

// // prints out completed Mad Libs
// const completedMadLibs = () => {
//     alert(`Once upon a time a group of ${words.number} General Assembly graduates got together and made a startup called ${words.adjective} Technologies. Their goal was to create smart ${words.pluralNoun}. They approached the challenge ${words.adverb} which ultimately lead them to ${words.anotherAdjective} fame.`)
// };
// startMadLib()


let words = {}
function startMadLib () {
        words.number = prompt(`Give me a number`)
        words.adjective = prompt(`Give me an adjective`)
        words.pluralNoun = prompt(`Give me a plural noun`)
        words.adverb = prompt(`Give me an adverb`)
        words.anotherAdjective = prompt(`Give me an another ajective`)
        alert(`Once upon a time a group of ${words.number} General Assembly graduates got together and made a startup called ${words.adjective} Technologies. Their goal was to create smart ${words.pluralNoun}. They approached the challenge ${words.adverb} which ultimately lead them to ${words.anotherAdjective} fame.`)
}
startMadLib()

// function madLibAdjective () {
//     let adjective = prompt(`Give me an adjective`)
//         words.adjective = adjective
//         pluralNoun()
//     }

// function pluralNoun () {
//     let pluralNoun = prompt(`Give me a plural noun`)
//         words.pluralNoun = pluralNoun
//         adverb()
//     }

// function adverb () {
//     let adverb = prompt(`Give me an adverb`)
//         words.adverb = adverb
//         madLibAdjective2()
//     }

// function madLibAdjective2 () {
//     let anotherAdjective = prompt(`Give me another adjective`)
//         words.anotherAdjective = anotherAdjective
//     }



// function runMadLibs () {
//     startMadLibs()
//     prompt(`Once upon a time a group of ${words.number} General Assembly graduates
//     got together and made a startup called ${words.adjective} Technologies.
//     Their goal was to create smart ${words.pluralNoun}.
//     They approached the challenge ${words.adverb}
//     which ultimately lead them to ${words.anotherAdjective} fame.`)    
// }
// runMadLibs()