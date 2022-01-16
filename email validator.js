let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validator();
});

function validator() {
  let usernamevalue = username.value.trim();
  let emailvalue = email.value.trim();
  let passwordvalue = password.value.trim();
  let password2value = password2.value.trim();

  if (usernamevalue === "") {
    setError(username, "plz enter your username");
  } else {
    setsucces(username);
  }
  if (emailvalue === "") {
    setError(email, "plz enter your email");
  } else {
    setsucces(email);
  }
  if (passwordvalue === "") {
    setError(password, "plz enter your password");
  } else {
    setsucces(password);
  }
  if (password2value === "") {
    setError(password2, "plz enter your password");
  } 
   else if(password2value !==passwordvalue){
    setError(password2, "plz enter same password");
   }
  else {
    setsucces(password2);
  }

  function setError(input, message) {
    let setcontrol = input.parentElement;
    let small = setcontrol.querySelector("small");
   setcontrol.className= 'form-controler error'
    small.innerText = message;
  }
  function setsucces(input){
      let setcontroler= input.parentElement;
     setcontroler.className='form-controler success'

  }
}
