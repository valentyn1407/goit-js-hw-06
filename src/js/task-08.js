const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;
  
  if (email === '' || password === '') {
    alert('All fields must be filled in!');
    return;
  }
  
  const formData = {
    email,
    password,
  };
  
  console.log(formData);
  
  loginForm.reset();
});