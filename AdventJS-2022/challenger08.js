/* 
checkPart("uwu") // true
// "uwu" es un palíndromo sin eliminar ningún carácter

checkPart("miidim") // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

checkPart("midu") // false
// "midu" no puede ser un palíndromo después de eliminar un carácter

*/

function checkPart(part) {
    const reverseString = part.split("").reverse().join("")
    if (part !== reverseString) {
        for (let i = 0; i < part.length; i++) {
            let stringArr = reverseString.split("")
            stringArr.splice(i, 1)
            let compare = stringArr.splice(0, stringArr.length).join("")
            if (compare === compare.split("").reverse().join("")) {
                return true
            }
        }
        return false
    }
    return true
}

console.log(checkPart('uwu'))
console.log(checkPart('miidim'))
console.log(checkPart('agu'))

// let part = "miidim"
// let reverseString = part.split("").reverse().join("")
// for (let i = 0; i < part.length; i++) {
//     let stringArr = reverseString.split("")
//     stringArr.splice(i, 1)
//     let arrFinal = stringArr.splice(0, stringArr.length).join("")
//     if(arrFinal == arrFinal.split("").reverse().join("")){
//         console.log("true")
//     }
//     console.log("----------")
//     console.log("Array invertido: "+arrFinal.split("").reverse().join(""))
//     console.log("Array original: "+arrFinal)
// }