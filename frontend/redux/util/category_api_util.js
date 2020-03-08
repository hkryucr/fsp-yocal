export const fetchCategories = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/categories',
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

