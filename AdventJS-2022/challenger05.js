function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let combinaciones = [];
    combinaciones.push([], [giftsCities[0]]);
    giftsCities.shift();

    giftsCities.map((city) => {
        const newList = combinaciones.map((combinacion) => {
            let _combinacion = [...combinacion];
            if (_combinacion.length < maxCities) {
                _combinacion.push(city);
            }
            return _combinacion;
        });
        combinaciones = combinaciones.concat(newList);
    });

    combinaciones.shift();
    return Math.max(
        ...combinaciones.map(x => {
            let sum = x.reduce((total, num) => total + num);
            return sum > maxGifts ? 0 : sum;
        }));
}