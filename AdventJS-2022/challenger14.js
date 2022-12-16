function getOptimalPath(path) {
    const res = path.reduceRight((prev, current) => {
        return current.map((el, i) => {
            return el + Math.min(prev[i], prev[i + 1])
        })
    })
    return res[0]
}
