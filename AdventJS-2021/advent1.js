const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' }
]

const ovejasFiltradas = (ovejas) =>{

    let filtrado = ovejas.filter(oveja => {
    const {name, color} = oveja
    const nameToLower = name.toLowerCase()
    return color === 'rojo' && nameToLower.includes('n') && nameToLower.includes('a')
    })

    return filtrado
}

console.log(ovejasFiltradas(ovejas))


