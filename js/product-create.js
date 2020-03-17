let create_product = null;
$("button").click(() => {
    for(let product of create_product){
        let id = 0;
        $("#partnbr").val;
        $("#productname").val;
        $("#price").val;
        $("#unit").val;
        $("#photopath").val;
        $("#vendorid").val;
        out (product);
    }
})

let vendors = [];
for(let vend of vendors){
    let option = `<option value = "${vend.id}">"${vend.name}"</option>`;
}
<select id = "selVendor">
    <option value = "" selected>display</option>
</select>

$().ready(() => {
    $.ajax({
        method: "POST",
        url: "http://localhost:61984/api/products",
        data: JSON.stringify(product),
        contentType: "application/json",
    })
    .done((res) => {
        console.log(res);
        click();
    })
    .fail((err) => {
        console.error("Error:", err);
    });
})