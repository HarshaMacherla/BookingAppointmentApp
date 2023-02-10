var forSubmit = document.addEventListener('submit', onSubmit);

function onSubmit(e) {
  var userName = document.getElementById('name');
  var userEmail = document.getElementById('email');
  localStorage.setItem("User Name", userName.value);
  localStorage.setItem("Email", userEmail.value);
}