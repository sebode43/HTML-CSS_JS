let saved_users = null;

$().ready(() => {
    console.log("Before getJSON call.");
    $.getJSON("http://localhost:61984/api/users")
        .done((users) => {
            saved_users = users;
            console.log("Users:", users); //name, variable
            display();
        })
        .fail((err) => {
            console.error("ERROR:", err);
        });
    console.log("After getJSON call.");
});

const display = () => {
    let tbody = $("#userbody"); //like documentbyGetid
    tbody.html(""); //"" - no data inside
    for(let user of saved_users){
        let tr = $("<tr></tr>"); //creates a jQuery object that we can use out o f the HTML
        let tdId = `<td>${user.id}</td>`;
        let tdName = `<td>${user.firstname} ${user.lastname}</td>`;
        let tdPhone = `<td>${user.phone}</td>`;
        let tdEmail = `<td>${user.email}</td>`;
        tr.html(tdId + tdName + tdPhone + tdEmail);
        tbody.append(tr);
    }
};