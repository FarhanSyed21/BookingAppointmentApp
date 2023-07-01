const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const email = document.getElementById("email").value;
const number = document.getElementById("number").value;
const showDetails = document.getElementById("submit");

showDetails.addEventListener("click", addItems);

function addItems(event) {
  event.preventDefault();
  localStorage.setItem("First Name: ", firstName);
  localStorage.setItem("Last Name: ", lastName);
  localStorage.setItem("Email: ", email);
  localStorage.setItem("Number: ", number);

  console.log(localStorage);
}
