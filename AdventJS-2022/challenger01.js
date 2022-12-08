const gifts = ['book', 'game', 'socks']

function warpping(gifts){
    return gifts.map(gift => `${'*'.repeat(gift.length + 2)}\n*${gift}*\n${'*'.repeat(gift.length + 2)}`)
}

const giftsWarping = warpping(gifts)
console.log(giftsWarping);
