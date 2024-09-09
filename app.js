var fname=document.getElementById("fname");
var lname=document.getElementById("lname");
var email=document.getElementById("email");
var password=document.getElementById("password");



function btnclick(){
    event.preventDefault();
user.fname=fname.value;
user.lname=lname.value;
user.email=email.value;
user.password=password.value;

fname.value=" ";
lname.value=" ";
email.value=" ";
password.value=" ";
}