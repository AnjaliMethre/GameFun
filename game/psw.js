function validation(){
    let psw=document.getElementById("psw");
    let upr=document.getElementById("upper");
    let lower=document.getElementById("lower");
    let spl=document.getElementById("special_char");
    let num=document.getElementById("number");
    let len=document.getElementById("length");

if(psw.value.match(/[0-9]/)){
    num.style.color='green';
}
else{
    num.style.color='red';
}

if(psw.value.match(/[A-Z]/)){
    upr.style.color='green';
}
else{
    upr.style.color='red';
}

if(psw.value.match(/[a-z]/)){
    if(psw.value.length==3)
    lower.style.color='green';
}
else{
    lower.style.color='red';
}

if(psw.value.match(/[!\@\$\%\^\&\*\?\.\,\+\_\-\~]/)){
    spl.style.color='green';
}

else{
    spl.style.color='red';
}

if(psw.value.length>3 && psw.value.length<=8){
    len.style.color='green';
}
else{
    len.style.color='red';
}
};

const btn=document.querySelector("button");
btn.addEventListener('onclick',()=>{
    document.write("this is ur password",validation());
});