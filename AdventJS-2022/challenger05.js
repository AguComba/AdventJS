getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
getMaxGifts([50], 15, 1) // 0
getMaxGifts([50], 100, 1) // 50
getMaxGifts([50, 70], 100, 1) // 70
getMaxGifts([50, 70, 30], 100, 2) // 100
getMaxGifts([50, 70, 30], 100, 3) // 100
getMaxGifts([50, 70, 30], 100, 4) // 100

//giftsCities = regalos a repartir por ciudad
//maxGifts = maximo de regalos en la bolsa 
//maxCities = maximo de ciudades por las que se puede pasar 
function getMaxGifts(giftsCities, maxGifts, maxCities){
    if(giftsCities.length > maxCities){
        console.log(giftsCities.filter(gift => gift <= maxGifts))
    }
}