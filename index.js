let buttonOpenEditUserPopup = document.querySelector(".user__edit-button");
let buttonSaveEditUserPopup = document.querySelector(".popup__save-button");
let formElement = document.querySelector(".popup__form");
let popup = document.querySelector(".popup");
let buttonClosePopup = document.querySelector(".popup__close-button");
let inputUserName = document.querySelector(".popup__input_type_name");
let inputUserDescription = document.querySelector(
  ".popup__input_type_description"
);

let outputUserName = document.querySelector(".user__name");
let outputUserDescription = document.querySelector(".user__description");

function openPopup() {
  inputUserName.value = outputUserName.innerHTML;
  inputUserDescription.value = outputUserDescription.innerHTML;

  if (popup.classList.contains("popup_show")) return;
  else {
    popup.classList.add("popup_show");
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  outputUserName.innerHTML = inputUserName.value;
  outputUserDescription.innerHTML = inputUserDescription.value;
  closePopup();
}

function closePopup() {
  if (popup.classList.contains("popup_show")) {
    popup.classList.remove("popup_show");
    inputUserName.value = outputUserName.innerHTML;
    inputUserDescription.value = outputUserDescription.innerHTML;
  } else return;
}

buttonOpenEditUserPopup.addEventListener("click", openPopup);
formElement.addEventListener("submit", handleFormSubmit);
buttonClosePopup.addEventListener("click", closePopup);
