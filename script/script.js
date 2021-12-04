let popup = document.querySelector('.pop-up');
let popupProfile = document.querySelector('.pop-up_profile_popup');
let popupAdd = document.querySelector('.pop-up_add');
let popupImg = document.querySelector('.pop-up_img');
let formProfile = document.querySelector('.form_profile');
let formAdd = document.querySelector('.form_add');
let editBtn = document.querySelector('.profile__edit-button');
let closeProfileBtn = document.querySelector('.pop-up__exit_profile');
let closeAddBtn = document.querySelector('.pop-up__exit_add');
let closeImgBtn = document.querySelector('.pop-up__exit_img');
let imagePopup = document.querySelector('.image');
let imagepopUptitle = document.querySelector('.title');
const profileName = document.querySelector('.profile__name');
const profileSubName = document.querySelector('.profile__subname');
let nameInput = document.querySelector('.form__input_profile_name');
let subnameInput = document.querySelector('.form__input_profile_subname');
let addName = document.querySelector('.form__input_add_name');
let addUrl = document.querySelector('.form__input_add_url');
let addBtn = document.querySelector('.profile__add-button');
let elementTitle = document.querySelectorAll('.element__title');
let elementImage = document.querySelectorAll('.element__image');
let elements = document.querySelector('.elements');

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

//открытие попапа
function openPopup(popup) {
  popup.classList.add('pop-up_opened');
}
function closePopup(popup) {
  popup.classList.remove('pop-up_opened');
}
function openProfilePopup() {
    nameInput.value = profileName.textContent;
    subnameInput.value = profileSubName.textContent;
    openPopup(popupProfile);
}
function openAdd() {
  openPopup(popupAdd);
}
//закрытие попапа
function exitProfile() {
  closePopup(popupProfile);
}
function exitAdd() {
  closePopup(popupAdd);
}
//сохранение формы
function hanldeProfileSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileSubName.textContent = subnameInput.value;
    closePopup(popup);
}
//cоздание карточки
function createCard() {
  const cardTemplate = document.querySelector('#add').content;
  let userAdd = cardTemplate.querySelector('.element').cloneNode(true);
  let del = userAdd.querySelector('.element__delete-card');
  let likes = userAdd.querySelector('.element__like');
  let img = userAdd.querySelector('.element__image');
  let imgTitle = userAdd.querySelector('.element__title');

  img.addEventListener('click', function() {
    imagePopup.src = img.src;
    imagepopUptitle.textContent = imgTitle.textContent;
    openPopup(popupImg);
  });
  
  likes.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  } );

  del.addEventListener('click', function () {
  const listItem = del.closest('.element');
    listItem.remove();
  });

  return userAdd;
}

//загрузка карточек
initialCards.forEach( function(item) {
  let card = createCard();
  card.querySelector('.element__image').src = item.link;
  card.querySelector('.element__image').alt = item.alt;
  card.querySelector('.element__title').textContent = item.name;
  elements.append(card);
});

//добавление карточек
function formSubmitHandlerAdd (evt) {
  evt.preventDefault();
  let card = createCard();
  card.querySelector('.element__image').src = addUrl.value;
  card.querySelector('.element__image').alt = 'ваша картинка';
  card.querySelector('.element__title').textContent = addName.value;
  elements.prepend(card);
  addName.value = '';
  addUrl.value = '';
  exitAdd();
}

editBtn.addEventListener('click', openProfilePopup);
addBtn.addEventListener('click', openAdd);
closeProfileBtn.addEventListener('click', exitProfile);
closeAddBtn.addEventListener('click', exitAdd);
formProfile.addEventListener('submit', hanldeProfileSubmit);
formAdd.addEventListener('submit', formSubmitHandlerAdd);
closeImgBtn.addEventListener('click', function () {
  popupImg.classList.remove('pop-up_opened');
});