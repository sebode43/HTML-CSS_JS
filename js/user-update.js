let user = {
    id: 16,
    username: "test",
    password: "tsT123",
    firstname: "xx",
    lastname: "xx",
    phone: null,
    email: null,
    isReviewer: false,
    isAdmin: false
}

$().ready(() => {
    $.ajax({
        method: "PUT",
        url: "http://localhost:61984/api/users/16",
        data: JSON.stringify(user),
        contentType: "application/json"
    })
    .done((res) => {
        console.log(res);
    })
    .fail((err) => {
        console.error("Error:", err);
    });
})