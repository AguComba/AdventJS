function countHours(year, holidays) {
    let hours = 0;
    holidays.map(holiday => {
        [month, day] = holiday.split('/')
        const date = new Date(+year, month - 1, +day)
        if (!(date.getDay() === 0 || date.getDay() === 6)) {
            hours = hours + 2
        }
    })
    return hours
}
