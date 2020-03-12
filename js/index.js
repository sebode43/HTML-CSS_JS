function clickme1(){

}
let clickme2 = function(){} //these are both the same defining function

const clickme3 = () => {
    let ctrl = document.getElementById("inp");
    let val = ctrl.value;
    let lblCtrl = document.getElementById("lbl")
    lblCtrl.innerHTML = "<h3>"+val+"</h3>";
} //constant - function cannot be changed
const calc = () => {
    let numCtrl = document.getElementById("num2");
    let val2 = numCtrl.value;
    let ctrl1 = document.getElementById("num1");
    ctrl1 = 0;
    ctrl1 = ctrl1 + val2;
    let ansCtrl = document.getElementById("ans")
    ansCtrl.value = +val2 + +ctrl1;
    let clearCtrl = document.getElementById("clear")
    ctrl1 = 0;
    
}