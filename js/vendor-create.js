let vendor = {
    id: 0,
    code: "Mjr",
    name: "Meijer",
    address: "1243 Address",
    city: "Cincinnati",
    state: "OH",
    zip: "45201",
    phone: null,
    email: null
}

$().ready(() => {
    $.ajax({
        method: "POST",
        url: "http://localhost:61984/api/vendors",
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