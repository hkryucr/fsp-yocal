export const fetchReviews = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/reviews',
        error: (err) => console.log(err)
    })
}

export const fetchReview = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/reviews/${id}`,
        error: (err) => console.log(err)
    })
}

