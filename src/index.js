import './styles/index.css';


import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';

import {
  items,
  cardListSelector,
  popupProfile,
  popupAdd,
  popupImg,
  formProfile,
  formAdd,
  editBtn,
  imagePopup,
  imagepopUptitle,
  nameInput,
  subnameInput,
  addName,
  addUrl,
  addBtn,
  elements,
  cardTemplate,
  info,
  config,
  formValidators} from './utils/constants.js';

const popupView = new PopupWithImage(popupImg);
const openProfile = new PopupWithForm(popupProfile);
const openAddCard = new PopupWithForm(popupAdd);
const userInfo = new UserInfo(info);


 
  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    
    formList.forEach((formElement) => {
      
      const validator = new FormValidator(formElement, config);
  
      const formName = formElement.getAttribute('name');
      
  
      formValidators[formName] = validator;
      validator.enableValidation();
    });
  };
 
  
function openProfilePopup() {
    formValidators.edit.resetValidation();
    openProfile.open();
    nameInput.value = userInfo.getUserInfo().name;
    subnameInput.value = userInfo.getUserInfo().subname;
}
function openAdd() {
  openAddCard.open();
  formAdd.reset();
  formValidators.add.resetValidation();
}

 
//сохранение формы
function saveFormProfile() {
  userInfo.setUserInfo(nameInput.value, subnameInput.value);   
  }
//cоздание карточки
const addingCards = new Section({
  data: items,
  renderer: (item) => {
    const card = new Card(item, cardTemplate, handleCardClick);
   
    const cardElement = card.generateCard();
    addingCards.addItem(cardElement);
  }},
  cardListSelector
  );
  addingCards.renderItems();
 

function createCard(data) {
  const card = new Card(data, cardTemplate, handleCardClick );
  const cardElement = card.generateCard();
  return cardElement;
}
//добавление карточек
function addingCard (evt) {
  evt.preventDefault();
  const data = {
    link: addUrl.value,
    name: addName.value,
    alt: addName.value
  };
    elements.prepend(createCard(data));
}


function handleCardClick(name, link, alt) {
  imagePopup.src = link;
  imagePopup.alt = alt;
  imagepopUptitle.textContent = name;
  popupView.open({name,link});
}
openProfile.setEventListeners();
openAddCard.setEventListeners();
popupView.setEventListeners();
editBtn.addEventListener('click', openProfilePopup);
addBtn.addEventListener('click', openAdd);
formProfile.addEventListener('submit', saveFormProfile);
formAdd.addEventListener('submit', addingCard);
enableValidation(config);




