import emailjs from "@emailjs/browser";

// get all elements needed
const Form = document.getElementById("contact--form");
const Name = document.getElementById("name");
const Email = document.getElementById("email");
const Message = document.getElementById("message");

Form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submit form");
  const name = Name.value;
  const email = Email.value;
  const message = Message.value;
});
