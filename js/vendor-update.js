let vendor = {
    id: 6,
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
        method: "PUT",
        url: "http://localhost:61984/api/vendors/6",
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