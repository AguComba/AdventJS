function getCompleted(part, total) {
    const MCD = (a, b) => {
        let c;
        while (b) {
            c = b
            b = a % b
            a = c
        }
        return a
    }

    part = part.split(":")
    total = total.split(":")

    let partRed = +partArr[0] * 3600 + +partArr[1] * 60 + +partArr[2]
    let totalRed = +totalArr[0] * 3600 + +totalArr[1] * 60 + +totalArr[2]
    const MCDof = MCD(partRed, totalRed)

    const partEnd = partRed / MCDof
    const totalEnd = totalRed / MCDof
    
    return partEnd + "/" + totalEnd
}

