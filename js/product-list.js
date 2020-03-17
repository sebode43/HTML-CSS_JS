let saved_products = null;
$().ready(() => {
    console.log("Before getJSON");
    $.getJSON("http://localhost:61984/api/products")
    .done((products) => {
        saved_products = products;
        console.log("Product:", products);
        display();
    })
    .fail((err)=>{
        console.error("ERROR:", err);
    })
    console.log("After getJSON");
});
const display = () => {
    let tbody = $("#producttbody");
    tbody.html = ("");
    for(let product of saved_products){
        let tr = $("<tr></tr>");
        let tdId = `<td>${product.id}</td>`;
        let tdPartNbr = `<td>${product.partNbr}</td>`; 
        let tdName = `<td>${product.name}</td>`;
        let tdPrice = `<td>${product.price}</td>`;
        let tdUnit = `<td>${product.unit}</td>`;
        let tdVendorId = `<td>${product.vendorId}</td>`;
        tr.html(tdId + tdPartNbr + tdName + tdPrice + tdUnit + tdVendorId);
        tbody.append(tr);
    }
};