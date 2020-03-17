let vendor = {
    id: 10,
    code: "Mjr",
    name: "Meijer",
    address: "1243 Address",
    city: "Cincinnati",
    state: "OH",
    zip: "45201",
    phone: null,
    email: "headquarters@meijer.com"
}

$().ready(() => {
    $.ajax({
        method: "DELETE",
        url: "http://localhost:61984/api/vendors/10",
        data: JSON.stringify(vendor),
        contentType: "application/json",
    })
    .done((res) => {
        console.log(res);
    })
    .fail((err) => {
        console.error("Error:", err);
    });
})