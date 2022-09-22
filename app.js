const form = document.querySelector("form");

form.addEventListener("submit", sendEmail);

function sendEmail(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  console.log(formProps);
  Email.send({
    SecureToken: "1baf8be7-572d-4176-b486-c2e9cdf69f65",
    To: "kadamr607@outlook.com",
    From: "kadamr607@gmail.com",
    Subject: "This is the subject",
    Body: formProps,
  }).then((message) => alert(message));
}
