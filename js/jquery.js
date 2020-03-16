$().ready(() => {
console.log("jQuery is ready!");
$("div").html("<h1>Welcome to jQuery</h1>").css("color","violet").css("font-family","Arial").css("fontSize","2rem");
$("button").click(() => {
    console.log("Button clicked");
})
});