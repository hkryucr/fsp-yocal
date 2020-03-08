export const fetchBusinesses = (bounds) => {
    return $.ajax({
        method: 'GET',
        url: '/api/businesses',
        data: {
            bounds
        },
        error: (err) => console.log(err)
    })
}

export const fetchBusiness = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/businesses/${id}`,
        error: (err) => console.log(err)
    })
}

