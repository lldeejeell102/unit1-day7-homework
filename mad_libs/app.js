// testing connection
console.log("hello world")

/*
for (let item in words) {
    const answer = prompt (`please input ${item}`)
    words(item) = answer};
makes items tick along the object
*/
let words = {
    number: " ",
    adjective: " ",
    pluralNoun: " ",
    adverb: " ",
    anotherAdjective: " "
}
const startMadLib = () => {
    for (let item in words) {
        const answer = prompt(`Please input ${item}`);
        words[item] = answer
    };
    console.log(words)
    completedMadLibs();
}

const completedMadLibs = () => {
    alert(`Once upon a time a group of ${words.number} General Assembly graduates got together and made a startup called ${words.adjective} Technologies. Their goal was to create smart ${words.pluralNoun}. They approached the challenge ${words.adverb} which ultimately lead them to ${words.anotherAdjective} fame.`)
};
startMadLib()


// function startMadLib () {
//     let number = prompt(`Give me a number`)
//     if (Number.isInteger(response) === true){
//         words.number = number
//         madLibAdjective()
//     }
//         alert(`that's not a number, try again`)
//         startMadLib()
// }

// function madLibAdjective () {
//     let adjective = prompt(`Give me an adjective`)
//     if (_.isString(response) === true){
//         words.adjective = adjective
//         pluralNoun()
//     }
//         alert(`that's not an adjective, try again`)
//         madLibAdjective()
// }

// function pluralNoun () {
//     let pluralNoun = prompt(`Give me a plural noun`)
//     if (_.isString(response) === true){
//         words.pluralNoun = pluralNoun
//         adverb()
//     }
//         alert(`that's not a plural noun, try again`)
//         pluralNoun()
// }

// function adverb () {
//     let adverb = prompt(`Give me an adverb`)
//     if (_.isString(response) === true){
//         words.adverb = adverb
//         madLibAdjective2()
//     }
//         alert(`that's not an adverb, try again`)
//         adverb()
// }

// function madLibAdjective2 () {
//     let anotherAdjective = prompt(`Give me another adjective`)
//     if (_.isString(response) === true){
//         words.anotherAdjective = anotherAdjective
//     }
//         alert(`that's not a adjective, try again`)
//         madLibAdjective2()
// }



// function runMadLibs () {
//     startMadLibs()
//     prompt(`Once upon a time a group of ${words.number} General Assembly graduates
//     got together and made a startup called ${words.adjective} Technologies.
//     Their goal was to create smart ${words.pluralNoun}.
//     They approached the challenge ${words.adverb}
//     which ultimately lead them to ${words.anotherAdjective} fame.`)    
// }
// runMadLibs()