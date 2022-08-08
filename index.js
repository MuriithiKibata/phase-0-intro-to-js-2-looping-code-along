// Code your solutions in this file
/**for (let age = 30; age < 40; age++) {
    console.log(`I am ${age} years old. Happy birthday to me`)

}

const gifts = ['teddy bear', 'drone', 'doll'];
function wrapGifts (gifts) {
    for (let i = 0; i < gifts.length; i++) {
    console.log (`Wrapped ${gifts[i]} and added a bow`)
    }
    return gifts
  
}
wrapGifts(gifts)**/
//const names = ['Gaudalupe', 'Ollie', 'Aki'];
//let event = Christmas
//let note=[]
function writeCards (names, event) {
    let note=[]
    for (let i = 0; i < names.length; i++) {
    console.log (note.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`))
    }
    return note
}
writeCards(["Ada", "Brendan", "Ali"], "surprise");
function countDown () {
    let i = 0
    while (i <= 10 ) {
        console.log(i)
        i++
    }
}