let num1 = 0;
$().ready(() => {
    $("div").css("text-align", "center")
    $(".minus").click(() => {
        num1--;
        display();
    })
       
    $(".plus").click(() => {
        num1++;
        display();
    })
})   

const display = () => {
    $(".lbl").text(num1).css("color","black").css("font-style", "normal").css("font-weight", "normal");
    if(num1 %2 ==0) $(".lbl").css("color","red");
    if(num1 %3 ==0) $(".lbl").css("font-style", "italic");
    if(num1 %5 ==0) $(".lbl").css("font-weight", "bold");
}