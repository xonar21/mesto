const popup = document.querySelector('.pop-up');
const popupProfile = document.querySelector('.pop-up_profile_popup');
const popupAdd = document.querySelector('.pop-up_add');
const popupImg = document.querySelector('.pop-up_img');
const formProfile = document.forms.edit;
const formAdd = document.forms.add;
const editBtn = document.querySelector('.profile__edit-button');
const closeProfileBtn = document.querySelector('.pop-up__exit_profile');
const closeAddBtn = document.querySelector('.pop-up__exit_add');
const closeImgBtn = document.querySelector('.pop-up__exit_img');
const imagePopup = document.querySelector('.image');
const imagepopUptitle = document.querySelector('.title');
const profileName = document.querySelector('.profile__name');
const formAddBtn = document.querySelector('.form__button-add');
const profileSubName = document.querySelector('.profile__subname');
const nameInput = formProfile.name;
const subnameInput = formProfile.subname;
const addName = formAdd.title;
const addUrl = formAdd.link;
const addBtn = document.querySelector('.profile__add-button');
const elements = document.querySelector('.elements');


export { popupImg, closeImgBtn, imagePopup, imagepopUptitle, openPopup, exitImg };

import { Card } from './card.js';
import { formValidor } from './FormValidator.js';

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
 


  function closeByEscape(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.pop-up_opened');
      closePopup(openedPopup);
    }
  }


  function closeOverlay(evt) {
    
    if (evt.target.classList.contains('pop-up__exit') || evt.target.classList.contains('pop-up')) {
      
      closePopup(evt.target);
    }
  }
  
//открытие попапа
 function openPopup(popup) {
  popup.classList.add('pop-up_opened');
  const opened = document.querySelector('.pop-up_opened');
  opened.addEventListener('click', closeOverlay);
  document.addEventListener('keydown', closeByEscape);

}


function closePopupForm(form) {
  const err = form.querySelectorAll('.form__input-error');
  const inp = form.querySelectorAll('.form__input');
  const but = form.querySelector('.form__button');
  err.forEach(function(item){
    item.textContent = '';
  })
  inp.forEach(function(item){
    item.classList.remove('form__input_type_error');
  })
  but.classList.remove('form__input-error_active');
  form.reset();
}

function closePopup(popup) {
  const opened = document.querySelector('.pop-up_opened');
  popup.classList.remove('pop-up_opened');
  document.removeEventListener('keydown', closeByEscape);
  opened.removeEventListener('click', closeOverlay);
}

function reset(inputElement ,errorMessage) {
  errorMessage.textContent = '';
  inputElement.classList.remove('form__input_type_error');
}

function openProfilePopup() {
    closePopupForm(formProfile);
    nameInput.value = profileName.textContent;
    subnameInput.value = profileSubName.textContent;
    openPopup(popupProfile);
}
function openAdd() {
  closePopupForm(formAdd);
  openPopup(popupAdd);
  formAddBtn.setAttribute('disabled', 'disabled');
  formAddBtn.classList.add('form__input-error_active');
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
        closePopupForm(formProfile);
        closePopup(popup);
    }

    

//cоздание карточки
initialCards.forEach((item) => {
  const card = new Card(item.link, item.name, item.alt);
  const cardElement = card._generateCard();
  document.querySelector('.elements').append(cardElement);
}); 




//добавление карточек
function addingCard (evt) {
  evt.preventDefault();
    const card = new Card(addUrl.value, addName.value, 'ваша картинка');
    const cardElement = card._generateCard();
    elements.prepend(cardElement);
    exitAdd();
    closePopupForm(formAdd);
}






editBtn.addEventListener('click', openProfilePopup);
addBtn.addEventListener('click', openAdd);
closeProfileBtn.addEventListener('click', exitProfile);
closeAddBtn.addEventListener('click', exitAdd);
formProfile.addEventListener('submit', saveFormProfile);
formAdd.addEventListener('submit', addingCard);
formValidor.enableValidation();





