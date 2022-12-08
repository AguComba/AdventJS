function distributeGifts(packOfGifts, reindeers) {
    let weight = 0
    let maxWeight = 0

    packOfGifts.map(gift => weight = weight + gift.length)
    reindeers.map(reinder => maxWeight = (reinder.length * 2) + maxWeight)
    return Math.floor((maxWeight / weight))
}