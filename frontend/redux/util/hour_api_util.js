export const fetchHours = (ids) => {
    return $.ajax({
        method: 'GET',
        url: '/api/hours',
        data: {
            hour: ids
        },
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

