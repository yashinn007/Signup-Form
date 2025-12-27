const btn = document.querySelector("#btn");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const conPass = document.querySelector("#conPass");
const nameText = document.querySelector("#nameText");
const emailText = document.querySelector("#emailText");
const passText = document.querySelector("#passText");
const conPassText = document.querySelector("#conPassText");



btn.addEventListener('click', (e)=>{
   e.preventDefault();

   if(addName() && addEmail() && addPass()){
    alert("Account created successfull");

    clearInput();
   }
});

function clearInput(){
    name.value = "";
     email.value = "";
     password.value = "";
     conPass.value = "";
     nameText.previousElementSibling.classList.remove("fa-check");
     nameText.previousElementSibling.classList.remove("fa-x");
     emailText.previousElementSibling.classList.remove("fa-check");
     emailText.previousElementSibling.classList.remove("fa-x");
     passText.previousElementSibling.classList.remove("fa-check");
     passText.previousElementSibling.classList.remove("fa-x");
     conPassText.previousElementSibling.classList.remove("fa-check");
     conPassText.previousElementSibling.classList.remove("fa-x");
}

function addName(){
    if(name.value == ""){
       nameText.innerText = "Name is requied";
       nameText.previousElementSibling.classList.add("fa-x");
       return false;
    }
    
    if(!name.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
       nameText.innerText = "Enter full name";
       nameText.previousElementSibling.classList.add("fa-x");
       return false;
    }
    else{
      nameText.innerText = "";
      nameText.previousElementSibling.classList.add("fa-check");
      return true;
    }  
};

function addEmail(){
    if(name.value == ""){
       emailText.innerText = "Email is requied";
       emailText.previousElementSibling.classList.add("fa-x");
       return false;
    }
    
    if(!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
       emailText.innerText = "Enter valid email";
       emailText.previousElementSibling.classList.add("fa-x");
       return false;
    }
    else{
        emailText.innerText = "";
      emailText.previousElementSibling.classList.add("fa-check");
      return true;
    }  
};

function addPass(){
    if(password.value == ""){
       passText.innerText = "Password is requied";
       passText.previousElementSibling.classList.add("fa-x");
       return false;
    }
    
    if(!password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
       passText.innerText = "Enter minimum 1 number, 1 upper caracter, 1 lower caracter, 1 symbol";
       passText.previousElementSibling.classList.add("fa-x");
       return false;
    }
    else{
        passText.innerText = "";
      passText.previousElementSibling.classList.add("fa-check");
    } 

    //confirm password
         if(conPass.value == ""){
       conPassText.textContent = "Password is requered";
       conPassText.previousElementSibling.classList.add("fa-x");
       return false;
   }

   if(conPass.value !== password.value){
       conPassText.textContent = "Password not match";
       conPassText.previousElementSibling.classList.add("fa-x");
       return false;
   }
    if(conPass.value === password.value){
      conPassText.innerText = "";
      conPassText.previousElementSibling.classList.add("fa-check");
      return true;
    }  
 
};

//key arrow
const inputs = document.querySelectorAll('#signupForm p input');

  inputs.forEach((input, index) => {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        // Focus next input if it exists
        if (inputs[index + 1]) {
          inputs[index + 1].focus();
          e.preventDefault();
        }
      }

      if (e.key === 'ArrowUp') {
        // Optional: go back to previous
        if (inputs[index - 1]) {
          inputs[index - 1].focus();
          e.preventDefault();
        }
      }
    });
  });