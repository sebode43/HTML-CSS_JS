let user = {
    id: 0,
    username: "xx",
    password: "xx",
    firstname: "xx",
    lastname: "xx",
    phone: null,
    email: null,
    isReviewer: false,
    isAdmin: false
}

$().ready(() => {
    $.ajax({
        method: "POST",
        url: "http://localhost:61984/api/users",
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