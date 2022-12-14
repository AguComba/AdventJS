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

function checkPartOptimized(part) {
    let arr = [...part].slice(1);
    let rev = [...part].reverse();
    let x = arr.join("") == arr.reverse().join("");
    let y = [...part].reduce((x, y, i) => x + (rev[i] != y), 0);
    return x || y <= 2;
}