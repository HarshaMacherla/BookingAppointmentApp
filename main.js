var forSubmit = document.addEventListener('submit', onSubmit);

function onSubmit(e) {
  let userName = document.getElementById('name').value;
  let userEmail = document.getElementById('email').value;
  let userMobile = document.getElementById('mobile').value;

  let userDetails = {
    "User Name": userName,
    "Mobile Number": userMobile
  };

  localStorage.setItem(userEmail, JSON.stringify(userDetails));
}