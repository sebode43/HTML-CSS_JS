let saved_vendors = null;
$().ready(() => {
    console.log("Before getJSON");
    $.getJSON("http://localhost:61984/api/vendors")
    .done((vendors) => {
        saved_vendors = vendors;
        console.log("Vendor:", vendors);
        display();
    })
    .fail((err)=>{
        console.error("ERROR:", err);
    })
    console.log("After getJSON");
});
const display = () => {
    let tbody = $("#vendortbody");
    tbody.html = ("");
    for(let vendor of saved_vendors){
        let tr = $("<tr></tr>");
        let tdId = `<td>${vendor.id}</td>`;
        let tdName = `<td>${vendor.name}</td>`;
        let tdAddress = `<td>${vendor.address}</td>`;
        let tdCity= `<td>${vendor.city}</td>`;
        let tdState = `<td>${vendor.state}</td>`;
        let tdPhone = `<td>${vendor.phone}</td>`;
        tr.html(tdId + tdName + tdAddress + tdCity + tdState + tdPhone);
        tbody.append(tr);
    }
};