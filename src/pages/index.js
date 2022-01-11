import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {
  items,
  cardListSelector,
  popupProfile,
  popupAdd,
  popupImg,
  editBtn,
  imagePopup,
  imagepopUptitle,
  addName,
  addUrl,
  addBtn,
  elements,
  cardTemplate,
  info,
  config,
  formValidators} from '../utils/constants.js';

const userInfo = new UserInfo(info);
const popupView = new PopupWithImage(popupImg);
const openProfile = new PopupWithForm(popupProfile, 
  (Data) => {
    userInfo.setUserInfo(Data);
    openProfile.close();
  });
const openAddCard = new PopupWithForm(popupAdd, 
  () => {
   addingCard();
   openAddCard.close();
});

  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
      const validator = new FormValidator(formElement, config);
      const formName = formElement.getAttribute('name');
      formValidators[formName] = validator;
      validator.enableValidation();
    });
  };
//функция создания карточки
const addCard = (item) => {
  const card = new Card(item, cardTemplate, handleCardClick); 
  return card.generateCard(); 
}
//генерация карточек
const addingCards = new Section({
  data: items,
  renderer: (item) => {
    addingCards.addItem(addCard(item));
  }},
  cardListSelector
  );
  addingCards.renderItems();
//добавление карточки
function addingCard () {
  const data = {
    link: addUrl.value,
    name: addName.value,
    alt: addName.value
  };
    elements.prepend(addCard(data));
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

editBtn.addEventListener('click', () => {
  openProfile.open(userInfo.getUserInfo());
  formValidators.edit.resetValidation();
});
addBtn.addEventListener('click',() => {
  openAddCard.open();
  formValidators.add.resetValidation();
});
enableValidation(config);




