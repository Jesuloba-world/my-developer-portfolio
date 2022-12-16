import emailjs from "@emailjs/browser";

// get all elements needed
const Form = document.getElementById("contact--form");
const Name = document.getElementById("name");
const Email = document.getElementById("email");
const Message = document.getElementById("message");

Form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = Name.value;
  const email = Email.value;
  const message = Message.value;

  const data = {
    name,
    email,
    message,
    from_name: "Portfolio site",
  };

  resetForm(Name, Email, Message);

  emailjs.send(
    process.env.EMAIL_SERVICE_ID,
    process.env.EMAIL_TEMPLATE_ID,
    data,
    process.env.EMAIL_PUBLIC_ID
  );
});

function resetForm(...elements) {
  elements.forEach((element) => {
    element.value = "";
  });
}
