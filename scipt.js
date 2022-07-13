   
   var regInfo = [
    name1="lwazi",
    surname="mathebula",
    email="lwazimath10gmail.com",
    number="0727095792",
    password="Lwando@21",
    confPass="Lwando@21"
   ]
   function regForm(){

   
    let name1,surname,email,phone_number,password,confPass;

      name1 = document.getElementById("name1").value;
     surname = document.getElementById("surname").value;
     email = document.getElementById("email").value;
     phone_number = document.getElementById("number").value;
     password = document.getElementById("password").value;
    confPass = document.getElementById("confPass").value;


    localStorage.setItem("name",name1);
    localStorage.setItem("surname",surname);
    localStorage.setItem("email",email);
    localStorage.setItem("phone_number",number);
    localStorage.setItem("password",password);
    localStorage.setItem("confi_pass",confPass);



}

var regInfo = [
                
  { email: "lwazimath10@gmail.com",
  
   password: "Lwando@21"
    }
   
]
function loginForm(){
   var email = document.getElementById("email").value
   var password = document. getElementById("password").value

     for(i=0; i<regInfo.length; i++){
       if(email == regInfo[i].email && password==regInfo[i].password){
        window.location.href="home.html";

   return
       }else{
        alert("invalid credentials")
      }

       if(email==regInfo[i].email && password==regInfo[i].password)
       {
         
       }
   }   
   alert("Incorrect password or email address")    

   

   

}
function regForm(){
    
  var em = document.getElementById("email2").value
  var pwd = document.getElementById("password1").value
 var newUser={
   email: em, password: pwd 
 }

 for(i=0; i<regInfo.length; i++){
   if(em==regInfo[i].email){
     alert("that email is already in used")
     return
   }else if(pwd.length<6){
     alert("password is too short")
     return
   }
 }

 regInfo.push(newUser)
 console.log(regInfo)
}
function logout(){
  alert("logout");
  regInfo.unauth();
  location.reload();
}

