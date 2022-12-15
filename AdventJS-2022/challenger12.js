const distance = 30
const sleighs = [
    { name: "Dasher", consumption: 0.7 },
    { name: "Dancer", consumption: 0.7 },
    { name: "Rudolph", consumption: 0.7 },
    { name: "Midu", consumption: 1 }
]



console.log(selectSleigh(distance, sleighs)) // => "Dancer"

// Dasher consume 9W para recorrer 30 de distancia
// Dancer consume 15W para recorrer 30 de distancia
// Rudolph consume 21W para recorrer 30 de distancia
// Midu consume 30W para recorrer 30 de distancia

// El mejor trineo con el que puede recorrer
// la distancia es Dancer.

// Dasher recorre la distancia pero es peor trineo
// Rudolph y Midu no pueden recorrer la distancia con 20W.

function selectSleigh(distance, sleighs) {
    const sleighsValid = []
    sleighs.map(sleigh => {
        const { consumption } = sleigh
        if (consumption * distance < 20) {
            sleighsValid.push(sleigh)
        }
    })
    return sleighsValid.length? sleighsValid[sleighsValid.length -1].name:null
}