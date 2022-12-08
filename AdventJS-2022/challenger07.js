const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['pc', 'bici', 'pc']

// reponer pc y muñeca
function getGiftsToRefill (a1,a2,a3){

}

console.log([...a1,...a2,...a3].filter(e => !(a1.includes(e))))