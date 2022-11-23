const inputs = document.querySelectorAll("input:not([type='submit'])");

inputs.forEach((input) => {
  input.addEventListener("invalid", addErrorMessage);
  input.addEventListener("blur", (event) => {
    input.checkValidity();
  });

  input.addEventListener("focus", removeErrorMessage);
});

function addErrorMessage(e) {
  const name = e.target.getAttribute("name");
  let errorIcon = document.createElement("span");
  errorIcon.setAttribute("data-id", name);
  errorIcon.classList.add("error-icon");
  errorIcon.innerHTML = "<img src=images/icon-error.svg>";

  let errorMessage = document.createElement("span");
  errorMessage.setAttribute("data-id", name);
  errorMessage.classList.add("error-message");

  if (e.target.value == "" || e.target.value == null)
    errorMessage.innerHTML =
      "" + e.target.getAttribute("placeholder") + " cannot be empty.";
  else
    errorMessage.innerHTML =
      "Looks like this is not an " + e.target.getAttribute("placeholder") + ".";

  e.target.after(errorMessage);
  e.target.after(errorIcon);

  e.target.classList.add("error");
}

function removeErrorMessage(e) {
  let elements = document.querySelectorAll(
    "[data-id='" + e.target.getAttribute("name") + "']"
  );

  elements.forEach((errorElement) => {
    errorElement.remove();
  });

  e.target.classList.remove("error");
}
