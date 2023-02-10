var forSubmit = document.addEventListener('submit', onSubmit);

function onSubmit(e) {
  let userName = document.getElementById('name').value;
  let userEmail = document.getElementById('email').value;

  let userDetails = {
    "User Name": userName,
    "Email ID": userEmail
  };

  localStorage.setItem("User Details", JSON.stringify(userDetails));
}