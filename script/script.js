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
const formEditBtn = document.querySelector('.form__button-edit');
const formAddBtn = document.querySelector('.form__button-add');
const profileSubName = document.querySelector('.profile__subname');
const nameInput = formProfile.name;
const input = document.querySelector('.form__input');
const subnameInput = formProfile.subname;
const addName = formAdd.title;
const addUrl = formAdd.link;
const addBtn = document.querySelector('.profile__add-button');
const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#add').content;
const nameError = formProfile.querySelector('.profile_name-error');
const subnameError = formProfile.querySelector('.profile_subname-error');  
const form = document.querySelector('.form');

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
      closePopupForm(form);
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
  popup.classList.remove('pop-up_opened');
  document.removeEventListener('keydown', closeByEscape);
}

function reset(inputElement ,errorMessage) {
  errorMessage.textContent = '';
  inputElement.classList.remove('form__input_type_error');
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
function createCard(link, name, alt) {
  
  const userAdd = cardTemplate.querySelector('.element').cloneNode(true);
  const del = userAdd.querySelector('.element__delete-card');
  const likes = userAdd.querySelector('.element__like');
  const img = userAdd.querySelector('.element__image');
  const imgTitle = userAdd.querySelector('.element__title');

  img.src = link;
  img.alt = alt;
  imgTitle.textContent = name;

  img.addEventListener('click', function() {
    imagePopup.src = img.src;
    imagePopup.alt = img.alt;
    imagepopUptitle.textContent = imgTitle.textContent;
    openPopup(popupImg);
  });
  
  closeImgBtn.addEventListener('click', exitImg);

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
  const card = createCard(item.link, item.name, item.alt);
  elements.append(card);
});

//добавление карточек
function addingCard (evt) {
  evt.preventDefault();
    const card = createCard(addUrl.value, addName.value, 'ваша картинка');
    elements.prepend(card);
    exitAdd();
    closePopupForm(formAdd);
}






editBtn.addEventListener('click', openProfilePopup);
addBtn.addEventListener('click', openAdd);
closeProfileBtn.addEventListener('click', exitProfile);
closeAddBtn.addEventListener('click', exitAdd);
formProfile.addEventListener('submit', saveFormProfile);
formAdd.addEventListener('submit', addingCard);

