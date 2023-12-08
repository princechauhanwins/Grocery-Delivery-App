function login (){
    let email,password;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
if(email==""){
    document.getElementById("emailerror").innerHTML="Enter Email Address";
}
else{
    document.getElementById("emailerror").innerHTML="";
    let user_record=new Array();
    user_record=JSON.parse(localStorage.getItem("registeruser"))?JSON.parse(localStorage.getItem("registeruser")):[]
    if(user_record.some((v)=>{
    return v.email==email
    })){
        let current_user=user_record.filter((v)=>{
            return v.email==email
        })[0]
    }
    else{
        document.getElementById("emailrror").innerHTML="Email is Incorect"
    }
}
if(password==""){
    document.getElementById("passerror").innerHTML="Enter Email Password";
}
else{
    document.getElementById("passerror").innerHTML="";
    let user_record=new Array();
    user_record=JSON.parse(localStorage.getItem("registeruser"))?JSON.parse(localStorage.getItem("registeruser")):[]
    if(user_record.some((v)=>{
    return v.password==password
    })){
        let current_user=user_record.filter((v)=>{
            return v.password==password
        })[0]
    localStorage.setItem("name",current_user.name);
    document.location.href="home.html";
    }
    else{
        document.getElementById("passerror").innerHTML="Password is Incorect"
    }
}
}
    
    