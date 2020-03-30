export const fetchBusinesses = (data) => {
    return $.ajax({
        method: 'GET',
        url: '/api/businesses',
        data: {
            data
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

