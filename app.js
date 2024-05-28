const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;

  // Check first name
  if (fName === '') {
    firstNameError.textContent = 'First Name cannot be empty.';
      firstNameError.style.color = 'red';
    firstName.classList.add('error');
    firstName.classList.add('error-border');
    
  } else {
    firstNameError.textContent = '';
    firstName.classList.remove('error');
    firstName.classList.remove('error-border');
    
  }




  

  // Check last name

  if (lName === '') {
    lastNameError.textContent = 'Last Name cannot be empty.';
    lastNameError.style.color = 'red';
    lastName.classList.add('error');
    lastName.classList.add('error-border');
  } else {
    lastNameError.textContent= '';
    lastName.classList.remove('error');
    lastName.classList.remove('error-border')
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '')  {
    emailError.textContent = 'Looks like it is not an email.';
    emailError.style.color = 'red';
    email.classList.add('error');
    email.classList.add('error-border')
  } else {
    emailError.textContent = '';
    email.classList.remove('error');
    email.classList.remove('error-border');
  }

  // Check password

  if (passwordVal === '') {
    passwordError.textContent = 'Password cannot be empty.';
    passwordError.style.color = 'red';
    password.classList.add('error');
    password.classList.add('error-border')
  } else {
    passwordError.textContent = '';
    password.classList.remove('error');
    password.classList.remove('error-border');
  }

  //If all fields are valid, submit the form
if(fName !== '' && lName !== '' && validateEmail(emailVal) && passwordVal !== '') {
  form.submit();
}

});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


const eye = document.getElementById('eye');
const passwordInput = document.getElementById('password');

eye.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eye.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    eye.classList.remove('fa-eye-slash');
  }
});



