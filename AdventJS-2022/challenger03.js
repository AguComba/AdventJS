const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer" ]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

function distributeGifts(packOfGifts, reindeers) {
    let weight = 0
    let maxWeight = 0

    packOfGifts.map(gift => weight = weight + gift.length)
    reindeers.map(reinder => maxWeight = (reinder.length * 2) + maxWeight)
    return Math.floor((maxWeight / weight))
}

console.log(distributeGifts(packOfGifts, reindeers)) // 2