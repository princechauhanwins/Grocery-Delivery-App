function register (){
    let name,email,password,address;
    name=document.getElementById("name").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    address=document.getElementById("address").value;
    
    
    if(name==="")
    {
        document.getElementById("error").innerHTML="Enter Your Name";
    }
    else{
        document.getElementById("error").innerHTML="";
    }
    if(email===""){
        document.getElementById("error1").innerHTML="Enter Your Email Address";
    }
    else{
        document.getElementById("error1").innerHTML="";
    }
    if(password===""){
        document.getElementById("error2").innerHTML="Enter Your Password";
    }
    else{
        document.getElementById("error2").innerHTML="";
    }
    if(address===""){
        document.getElementById("error3").innerHTML="Enter Your Address";
    }
    else{
        document.getElementById("error3").innerHTML="";
        let user_record=new Array();
    user_record=JSON.parse(localStorage.getItem("registeruser"))?JSON.parse(localStorage.getItem("registeruser")):[]
    if(user_record.some((v)=>{
    return v.email==email
    }
    )){
    alert ("User Alredy Exist");
    }
    else{
    user_record.push({
        "name":name,
        "email":email,
        "password":password,
        "address":address
    })
    localStorage.setItem("registeruser",JSON.stringify(user_record));
    window.location.href="home.html";
    }
    }
    }
    
    