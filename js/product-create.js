const baseurl = `http://localhost:61984/api/products`;
let product = {};
let vendors = [];


$().ready(() => {
    $.getJSON(`http://localhost:61984/api/products`)
    .done((res) => {
        vendors = res;
        console.log("Vendors:", res);
        init();
    });
    $("#Create").click(() => {
        let product = dataFromPage();
        $.ajax({
            method: "POST",
            url: `${baseurl}`,
            data: JSON.stringify(product),
            contentType: "application/json",
    })
            .done((res) => {
                console.log("Create Success", res);
            })
            .fail((err) => {
                console.error("Error:", err);
            });
        });
});
const init = () => {
    console.log("init");
    let select = $("#tvendors");
    select.html("");
    for(let v of vendors){
        select.append(`<option value = "${v.id}">${v.name}</option>`);
    }
};
const dataFromPage = () => {
    let product = {};
    product.id = +$("tid") .val();   
    product.partNbr = $("#partnbr").val();
    product.Name = $("#productname").val();
    product.price = $("#price").val();
    product.unit = $("#unit").val();
    product.vendorId = $("#tvendors").children("option:selected").val();
        return product;
};