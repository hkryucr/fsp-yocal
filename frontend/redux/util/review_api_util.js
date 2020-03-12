export const fetchReviews = (ids) => {
    return $.ajax({
        method: 'GET',
        url: '/api/reviews',
        data:{
            review: ids
        },
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

export const createReview = (formData) => (
    $.ajax({
        method: 'POST',
        url: `/api/reviews`,
        data: formData,
        contentType: false,
        processData: false
    })
)
