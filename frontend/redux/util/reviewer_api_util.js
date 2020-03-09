
export const fetchAllReviewers = () => (
    $.ajax({
        method: "GET",
        url: "/api/users"
    })
)

export const fetchReviewers = (ids) => (
    $.ajax({
        method: "GET",
        url: "/api/users",
        data: {
            user: ids
        }
    })
)
