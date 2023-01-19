'use strict';

function compareHands(black, white) {
  // '2H 3D 5S 9C KD',
  // '2C 3H 4S 8C AH'

  // read the hands
  // sort hand
  // getting highest value for each hand
  // comparing the values
  // output winner

  return 'White wins - high card: Ace';
}

function readHand(hand) {

   let handValues = hand.split(' ')
   let handValueObjects = handValues.map( newCard => {
     const cardObject = {
       [newCard[0]] : newCard[1]
     }
     return cardObject
   })
  return handValueObjects

}

// [{num:4, suite:'S'},{num:8, suite:'C'},{num:3, suite :'H'},{num:2, suite:'C'},{num : 'A', suite:'H'}]
function convertFaceCards(hands){
    const faceValues = {J : 11, Q : 12, K : 13, A : 14}
    var convertedHand = []
    let faceValuesKeys = Object.keys(faceValues)

    hands.forEach((card) =>
        convertedHand.push(card)
//        if (faceValuesKeys.includes(card.num)) {
//            convertedHand.push(card)
//            card.num = faceValues[card.num]
//        } else {
//            convertedHand.push(card)
//        }


    return convertedHand
}

function sortHand(hands) {
    const sortedHandValues = hands.sort((a,b) => (a.num > b.num ? 1:-1))
    return sortedHandValues
}

module.exports = { compareHands, readHand, convertFaceCards, sortHand };
