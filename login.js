var email= document.getElementById("field1");
var err1= document.getElementById("err1");
var pwd= document.getElementById("field2");
var err2= document.getElementById("err2");
var regex = /^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/
function validateEmail(){
    if(email.value.trim()==''){
    err1.innerText="Field cannot be empty";
    email.style.border='2px solid red';
    return false
    }
    else if(!email.value.match(regex)){
        err1.innerText="Email is not in correct format";
        email.style.border="2px solid red";
        return false
    }
    else{
        err1.innerText="";
        email.style.border='2px solid green';

        return true
    }
}
function validatePass(){
    if(pwd.value.trim()==''){
        err2.innerText="Field cannot be empty";
        pwd.style.border='2px solid red';
        return false
        }
    else if(pwd.value.length<8){
        pwd.style.border='2px solid red';
        err2.innerText="Password must be longer than 8";
        return false
    } 
    else if(!pwd.value.match(pegex)){
        err2.innerText="Password is not in correct format";
        pwd.style.border="2px solid red";
        return false
    }
    else{
            err2.innerText="";
            pwd.style.border='2px solid green';
    
            return true
        }
}
function verify(){
    if(!validateEmail()||!validatePass()){
        return false
    }
    else 
        return true
}