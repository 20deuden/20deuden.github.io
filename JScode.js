var Cookies = 0;
var AddCookies = 1;
//initializes local storage variable if not already done//
window.onload = function() {
if (localStorage.myValue === undefined) {
    localStorage.myValue = 0;
}
}
//brings cookie value from home page//
window.onload = Cookies = JSON.parse(localStorage.myValue);

//checks if value from other page is > 0 if T, shows cookie value, then resets local storage (so else statement can run)//
//else adds to existing cookie value (which will be 0 if no data from other page saved)//
function Add() {
if (JSON.parse(localStorage.myValue)>0) {
    document.getElementById("total").innerHTML = Cookies;
    localStorage.myValue = 0;
} else {
    Cookies = Cookies + AddCookies
    document.getElementById("total").innerHTML = Cookies;
}
}
//sends value to other HTML//
function submitValue() {
    localStorage.myValue = JSON.stringify(Cookies);
}
//end of cookie clicker button//
//page switch function//
function switchPage() {
    window.location.href = "something.html";
}
function switchPage2() {
    window.location.href = "index.html";
}
//end of page switch function//