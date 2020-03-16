let saved_user = null;
$().ready(() => {
    console.log("Before getJSON");
$.getJSON("http://localhost:61984/api/users/1")
.done((user)=> {
saved_user = user;
console.log("User:", user);
display();
})
.fail((err) => {
    console.error("ERROR:", error)
});
console.log("After getJSON");
});

const display = () => {
    $("#tid").text(saved_user.id);
    $("#tname").text(`${saved_user.firstname} ${saved_user.lastname}`);
    $("#tphone").text(saved_user.phone);
    $("#temail").text(saved_user.email);
};