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
        document.getElementById("num2").value = ' ';
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