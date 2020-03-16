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
        method: "DELETE",
        url: "http://localhost:61984/api/users/16",
        data: null,
        contentType: "application/json"
    })
    .done((res) => {
        console.log(res);
    })
    .fail((err) => {
        console.error("Error:", err);
    });
})