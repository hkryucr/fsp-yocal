export const fetchHours = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/hours',
        error: (err) => console.log(err)
    })
}

export const fetchHour = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/hours/${id}`,
        error: (err) => console.log(err)
    })
}

