let saved_product = null;
$().ready(() => {
console.log("Before getJSON");
$.getJSON("http://localhost:61984/api/products/1")
.done((product) => {
    saved_product = product;
    console.log("Product:", product);
    display();
})
.fail((err) => {
    console.error("ERROR:", err)
});
console.log("After getJSON");
});
const display = () => {
    $("#tid").text(saved_product.id);
    $("#tpartnbr").text(saved_product.partNbr);
    $("#tname").text(saved_product.name);
    $("#tprice").text(saved_product.price);
    $("#tunit").text(saved_product.unit);
    $("#tvendorid").text(saved_product.vendorId);
};