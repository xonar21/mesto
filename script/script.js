let popUp = document.querySelectorAll('.pop-up');
let formElement = document.querySelectorAll('.form');
let edit = document.querySelector('.profile__edit-button');
let close = document.querySelectorAll('.pop-up__exit');
let profileName = document.querySelector('.profile__name');
let profileSubName = document.querySelector('.profile__subname');
let nameInput = document.querySelectorAll('.form__input_profile_name');
let jobInput = document.querySelectorAll('.form__input_profile_subname');
let add = document.querySelector('.profile__add-button');
let elementTitle = document.querySelectorAll('.element__title');
let elementImage = document.querySelectorAll('.element__image');

let mestoAdd = document.querySelector('#add').content;
let elements = document.querySelector('.elements');
let userAdd = mestoAdd.querySelector('.element').cloneNode(true);




//массив карточек
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

//открытие попапа
function open() {

    nameInput[0].value = profileName.textContent;
    jobInput[0].value = profileSubName.textContent;
    popUp[0].classList.add('pop-up_opened');
    
}

function openAdd() {

    popUp[1].classList.add('pop-up_opened');

}
//закрытие попапа
function exit() {

    popUp[0].classList.remove('pop-up_opened');
}

function exitAdd() {

    popUp[1].classList.remove('pop-up_opened');

}



//сохранение формы
function formSubmitHandler (evt) {

    evt.preventDefault();
    profileName.textContent = nameInput[0].value;
    profileSubName.textContent = jobInput[0].value;
    exit();
}
//прогрузка карточек




console.log(userAdd.querySelector('.element__image').src);

for (let l = 0; l < initialCards.length; l++) {
  let userAdd = mestoAdd.cloneNode(true);
  userAdd.querySelector('.element__image').src = initialCards[l].link;
  userAdd.querySelector('.element__title').textContent = initialCards[l].name;
  elements.append(userAdd);
  }

//like
let element = document.querySelectorAll('.element');
let elem = Array.from(element);
let likes = document.querySelectorAll('.element__like');
for (let i = 0; i < element.length; i++) {
  likes[i].addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like_active');
    } );

}
//добавление карточек
function formSubmitHandlerAdd (evt) {
  const mestoAdd = document.querySelector('#add').content;
  let elements = document.querySelector('.elements');
  let userAdd = mestoAdd.querySelector('.element').cloneNode(true);
  evt.preventDefault();
  userAdd.querySelector('.element__image').src = jobInput[1].value;
  userAdd.querySelector('.element__title').textContent = nameInput[1].value;
  
  elements.prepend(userAdd);
  elem.push(userAdd);
  nameInput[1].value = '';
  jobInput[1].value = '';
  
  document.querySelector('.element__like').addEventListener ('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  } );
  document.querySelector('.element__delete-card').addEventListener('click', function() {
    const listItem = document.querySelector('.element__delete-card').closest('.element');
    listItem.remove();
  });
  document.querySelector('.element__image').addEventListener('click', function() {
    popUp[2].classList.add('pop-up_opened');
    imagePopup.src = userAdd.querySelector('.element__image').src;
    imagepopUptitle.textContent = userAdd.querySelector('.element__title').textContent; 
  });
  exitAdd();
}
//удаление карточек
let del = document.querySelectorAll('.element__delete-card');
for (let l = 0; l < element.length; l++) {
del[l].addEventListener('click', function () {
  const listItem = del[l].closest('.element');
  listItem.remove();
}); 
}


edit.addEventListener('click', open);
add.addEventListener('click', openAdd);
close[0].addEventListener('click', exit);
close[1].addEventListener('click', exitAdd);
formElement[0].addEventListener('submit', formSubmitHandler);
formElement[1].addEventListener('submit', formSubmitHandlerAdd);


// попап картинки
let image = document.querySelectorAll('.element__image');
let titleImage = document.querySelectorAll('.element__title');
let imagePopup = document.querySelector('.image-popUp');
let imagepopUptitle = document.querySelector('.image-popUp__title');
for (let l = 0; l < element.length; l++) {
  image[l].addEventListener('click', function () {
  imagePopup.src = image[l].src;
  imagepopUptitle.textContent = titleImage[l].textContent;
  popUp[2].classList.add('pop-up_opened');
}); 
}


close[2].addEventListener('click', function () {
  popUp[2].classList.remove('pop-up_opened');
});