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

