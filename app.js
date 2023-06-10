var loginForm = document.getElementById('loginForm');
var loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', function(event) {
  if (!loginForm.checkValidity()) {
    event.preventDefault();
    alert('Please fill in all the required fields.');
  }
});
