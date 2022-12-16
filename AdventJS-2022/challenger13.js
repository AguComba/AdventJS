function getFilesToBackup(lastBackup, changes) {
    const newChanges = changes.filter(change => change[1] > lastBackup).reduce((acc, change) => {
        if (!acc.includes(change[0])) {
            acc.push(change[0])
        }
        return acc
    }, [])
    return newChanges.sort((a, b) => a - b)
}

