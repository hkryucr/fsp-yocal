export const fetchCategories = (ids) => {
    return $.ajax({
        method: 'GET',
        url: '/api/categories',
        data: {
            category: ids
        },
        error: (err) => console.log(err)
    })
}

export const fetchCategory = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/categories/${id}`,
        error: (err) => console.log(err)
    })
}

