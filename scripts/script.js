const email = document.getElementById("email").value;
const form = document.getElementById("form-body");
const errorEl = document.getElementById("error");

form.addEventListener('submit', (e) => {
  let messaages = []
  if(email == '' || email == null) {
    messaages.push('Name is required!')
  }
  
  if(messaages.length > 0 ) {
    e.preventDefault();
    errorEl.innerText = messaages.join(', ')
  }

  if(email.length < 6) {
    messaages.push("Email must be greater than 6 characters")
  } else if (email.length >= 20){
    messaages.push("Email must be less than 20 characters")
  }
})