exports.getNewTime = function (): string{
    const d = new Date()
    return `${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}`
}


