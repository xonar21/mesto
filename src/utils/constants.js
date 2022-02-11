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
export const cardListSelector = '.elements';
export const popupProfile = document.querySelector('.pop-up_profile_popup');
export const popupAdd = document.querySelector('.pop-up_add');
export const popupImg = document.querySelector('.pop-up_img');
export const formProfile = document.forms.edit;
export const formAdd = document.forms.add;
export const editBtn = document.querySelector('.profile__edit-button');
export const imagePopup = document.querySelector('.image');
export const imagepopUptitle = document.querySelector('.title');
export const deletePopup = document.querySelector('.pop-up_delete');
export const avatarPopup = document.querySelector('.pop-up_avatar');
export const ava = document.querySelector('.profile__avatar');
export const submitProfile = document.querySelector('.form__button-edit');
export const submitAvatar = document.querySelector('.form__button_avatar');
export const submitAddCard = document.querySelector('.form__button-add');
export const submitDelete = document.querySelector('.form__button_delete');
export const nameInput = formProfile.name;
export const subnameInput = formProfile.subname;
export const addName = formAdd.title;
export const addUrl = formAdd.link;
export const addBtn = document.querySelector('.profile__add-button');
export const elements = document.querySelector('.elements');
export const cardTemplate = document.querySelector('#add').content;
export const info = {
    profileName: '.profile__name',
    profileSubName: '.profile__subname',
    profileAvatar: '.profile__avatar'
  };
export const config = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitBtnSelector: '.form__button',
    inputErrorClass: 'form__input_type_error',
    unActiveSubmit: 'form__input-error_active'
}; 
export const formValidators = {};
export {initialCards as items};