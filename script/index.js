
const popupProfile = document.querySelector('.pop-up_profile_popup');
const popupAdd = document.querySelector('.pop-up_add');
const popupImg = document.querySelector('.pop-up_img');
const formProfile = document.forms.edit;
const formAdd = document.forms.add;
const editBtn = document.querySelector('.profile__edit-button');
const closeImgBtn = document.querySelector('.pop-up__exit_img');
const imagePopup = document.querySelector('.image');
const imagepopUptitle = document.querySelector('.title');
const profileName = document.querySelector('.profile__name');
const profileSubName = document.querySelector('.profile__subname');
const nameInput = formProfile.name;
const subnameInput = formProfile.subname;
const addName = formAdd.title;
const addUrl = formAdd.link;
const addBtn = document.querySelector('.profile__add-button');
const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#add').content;

import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

//массив карточек
 const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
      alt: 'Архыз'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
      alt: 'Челябинская область'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
      alt: 'Иваново'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
      alt: 'Камчатка'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
      alt: 'Холмогорский район'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
      alt: 'Байкал'
    }
  ]; 

  const config = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitBtnSelector: '.form__button',
    inputErrorClass: 'form__input_type_error',
    unActiveSubmit: 'form__input-error_active'
  };
  
  const formValidators = {};
  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    
    formList.forEach((formElement) => {
      
      const validator = new FormValidator(formElement, config);
  
      const formName = formElement.getAttribute('name');
      
  
      formValidators[formName] = validator;
      validator.enableValidation();
    });
  };
 
  function closeByEscape(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.pop-up_opened');
      closePopup(openedPopup);
    }
  }

  function closeOverlay(evt) {
    
    if (evt.target.classList.contains('pop-up__exit') || evt.target.classList.contains('pop-up')) {
      
      closePopup(evt.currentTarget);
    }
  }
  
//открытие попапа
 function openPopup(popup) {
  popup.classList.add('pop-up_opened');
  popup.addEventListener('click', closeOverlay);
  document.addEventListener('keydown', closeByEscape);
}
function closePopup(popup) {
  popup.classList.remove('pop-up_opened');
  document.removeEventListener('keydown', closeByEscape);
  popup.removeEventListener('click', closeOverlay);
}
function openProfilePopup() {
    formValidators.edit.resetValidation();
    nameInput.value = profileName.textContent;
    subnameInput.value = profileSubName.textContent;
    openPopup(popupProfile);
}
function openAdd() {
  openPopup(popupAdd);
  formAdd.reset();
  formValidators.add.resetValidation();
}
//закрытие попапа
function exitProfile() {
  closePopup(popupProfile);
}
function exitAdd() {
  closePopup(popupAdd);
}
 function exitImg() {
  closePopup(popupImg);
}
//сохранение формы
function saveFormProfile (evt) {
    evt.preventDefault();
      profileName.textContent = nameInput.value;
      profileSubName.textContent = subnameInput.value;
      exitProfile();  
    }
//cоздание карточки
function createCard(data) {
  const card = new Card(data, cardTemplate, handleCardClick );
  const cardElement = card.generateCard();
  return cardElement;
}
initialCards.forEach((item) => {
  const data = {
    link: item.link,
    name: item.name,
    alt: item.alt
  };
  elements.append(createCard(data));
}); 
//добавление карточек
function addingCard (evt) {
  evt.preventDefault();
  const data = {
    link: addUrl.value,
    name: addName.value,
    alt: 'ваша картинка'
  };
    elements.prepend(createCard(data));
    exitAdd();
    formValidators.add.resetValidation();
}

function handleCardClick(name, link, alt) {
  imagePopup.src = link;
  imagePopup.alt = alt;
  imagepopUptitle.textContent = name;
  openPopup(popupImg);
  closeImgBtn.addEventListener('click', exitImg);
}
editBtn.addEventListener('click', openProfilePopup);
addBtn.addEventListener('click', openAdd);
formProfile.addEventListener('submit', saveFormProfile);
formAdd.addEventListener('submit', addingCard);
enableValidation(config);
