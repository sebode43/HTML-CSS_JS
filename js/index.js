function clickme1(){

}
let clickme2 = function(){} //these are both the same defining function

const clickme3 = () => {
    let ctrl = document.getElementById("inp");
    let val = ctrl.value;
    let lblCtrl = document.getElementById("lbl")
    lblCtrl.innerHTML = "<h3>"+val+"</h3>";
} //constant - function cannot be changed

    
    let num1 = 0;
    const display = () =>{
        document.getElementById("num1").value = num1;
        num1.value = num1;
        var num1style = numCtrl.style
        if(num1 %3 == 0){
            num1style.color = "green";
        }else{
            num1style.color = "blue";
        }
    }
    const add = () => {
    let numCtrl = document.getElementById("num2").value;
    num1 += +numCtrl;
    display();
}
const sub = () => {
    let numCtrl = document.getElementById("num2").value;
    num1 -= +numCtrl;
    display();
}
const mul = () => {
    let numCtrl = document.getElementById("num2").value;
    num1 *= +numCtrl;
    display();
}
const div = () => {
    let numCtrl = document.getElementById("num2").value;
    num1 /= +numCtrl;
    display();
}
const clr = () =>{
    num1 = 0;
    display();
}

const convertc = () =>{
    let c = +(document.getElementById("Celsius").value);
    let f = (c * 9 / 5) + 32;
    document.getElementById("Farenheitans").innerText = f;
}
const convertf = () =>{
    let f = +(document.getElementById("Farenheit").value);
    let c = 5/9 * (f - 32);
    document.getElementById("Celsiusans").innerText = c;
}