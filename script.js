const username = document.querySelector(".username");
const password = document.querySelector(".password");
const password2 = document.querySelector(".password2");
const button = document.querySelector(".button");



button.addEventListener("click", function (e) {
  const usernamevalue = username.value.trim();
  const passwordvalue = password.value.trim();
  const secondpasswordValue = password2.value.trim();

  e.preventDefault();
  console.log("SUBMIT");

  if (usernamevalue === "") {
    username.style.borderBottom = "2px solid red";
    console.log("error");
  } else {
    username.style.borderBottom = "2px solid green";
  }
// password
  if (passwordvalue === "") {
    password.style.borderBottom = "2px solid red";
  } else if (passwordvalue.length < 8) {
    password.style.borderBottom = "2px solid red";
  } else {
    password.style.borderBottom = "2px solid green";
  }
// Confirm password
  if (secondpasswordValue === "") {
    password2.style.borderBottom = "2px solid red";
  } else if (secondpasswordValue !== passwordvalue) {
    password2.style.borderBottom = "2px solid red";
    prompt('Try again password does not match');
  } else if(secondpasswordValue === passwordvalue){
    password2.style.borderBottom = "2px solid green";
  } else {
    password2.style.borderBottom = "2px solid green"; 
  }


  
//   const usernamesuccess =  username.style.borderBottom = "2px solid green";
//   const passwordsuccess = password.style.borderBottom = "2px solid green";
//   const password2success =   password2.style.borderBottom = "2px solid green";
//   if( usernamesuccess && passwordsuccess && password2success ){
//     prompt('correct credentials')
//   }

});
