let buttonOpenEditUserPopup = document.querySelector('.user__edit-button');
let buttonSaveEditUserPopup = document.querySelector('.popup__save-button');
let formElement = document.querySelector('.popup__form');
let popup = document.querySelector('.popup');
let buttonClosePopup = document.querySelector('.popup__close-button');
let inputUserName = document.querySelector('.popup__input_type_name');
let inputUserDescription = document.querySelector(
  '.popup__input_type_description'
);

let outputUserName = document.querySelector('.user__name');
let outputUserDescription = document.querySelector('.user__description');

function openPopup() {
  inputUserName.value = outputUserName.textContent;
  inputUserDescription.value = outputUserDescription.textContent;
  popup.classList.add('popup_opened');
}

function handleFormSubmit(event) {
  event.preventDefault();
  outputUserName.textContent = inputUserName.value;
  outputUserDescription.textContent = inputUserDescription.value;
  closePopup();
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

buttonOpenEditUserPopup.addEventListener('click', openPopup);
formElement.addEventListener('submit', handleFormSubmit);
buttonClosePopup.addEventListener('click', closePopup);
