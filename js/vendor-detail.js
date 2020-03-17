let saved_vendor = null;
$().ready(() => {
console.log("Before getJSON");
$.getJSON("http://localhost:61984/api/vendors/1")
.done((vendor) => {
    saved_vendor = vendor;
    console.log("Vendor:", vendor);
    display();
})
.fail((err) => {
    console.error("ERROR:", err)
});
console.log("After getJSON");
});
const display = () => {
    $("#tid").text(saved_vendor.id);
    $("#tname").text(saved_vendor.name);
    $("#taddress").text(saved_vendor.address);
    $("#tcity").text(saved_vendor.city);
    $("#tstate").text(saved_vendor.state);
    $("#tphone").text(saved_vendor.phone);
};