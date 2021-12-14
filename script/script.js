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

const nameError = formProfile.querySelector('.profile_name-error');
const subnameError = formProfile.querySelector('.profile_subname-error');  


const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
  inputElement.classList.remove('form__input_type_error');
  errorElement.textContent = ''; 
};



const checkInputValidity = (formElement,inputElement) => {
  if (!inputElement.validity.valid) {
     showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
  
};


const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
// const inputList = Array.from(document.querySelectorAll('.form__input'));
// console.log(hasInvalidInput(inputList));



//arr[0].addEventListener('submit', hanldeProfileSubmit);

const toggleButtonState = (inputList, buttonElement, formElement) => {
  
  if (hasInvalidInput(inputList)) {
    
    buttonElement.classList.add('form__input-error_active');
  } else {
    //formProfile.addEventListener('submit', hanldeProfileSubmit);
    buttonElement.classList.remove('form__input-error_active');
  }
};



function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__button');
  
  
  toggleButtonState(inputList,buttonElement);
  inputList.forEach((inputElement) => {
    
  inputElement.addEventListener('input', function () {
    checkInputValidity(formElement, inputElement);
    toggleButtonState(inputList,buttonElement,formElement);
  });
}); 
} 

function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.form'));
  
  formList.forEach((formElement) => {
   
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
}); 
}

enableValidation();



// nameInput.addEventListener('input', function () {
//   checkInputValidity(formProfile, nameInput);
// });

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
  const opened = document.querySelector('.pop-up_opened');
  
  opened.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('pop-up__exit') || evt.target.classList.contains('pop-up')) {
      
      closePopup(popup);
    }
    
    
  });

 document.addEventListener('keydown',function(evt){
   if(evt.key === 'Escape'){
    closePopup(popup);
   }
  
  });


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
  closePopup(popupProfile, formProfile);
  closePopupForm(formProfile)
}
function exitAdd() {
  closePopup(popupAdd, formAdd);
  closePopupForm(formAdd)
}

function exitImg() {
  closePopup(popupImg);
}



//сохранение формы
function hanldeProfileSubmit (evt) {
    evt.preventDefault();
    
        
        profileName.textContent = nameInput.value;
        profileSubName.textContent = subnameInput.value;
        
        closePopup(popup);
    }

    

//cоздание карточки
function createCard(link, name, alt) {
  const cardTemplate = document.querySelector('#add').content;
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
function formSubmitHandlerAdd (evt) {
  evt.preventDefault();
    const card = createCard(addUrl.value, addName.value, 'ваша картинка');
    elements.prepend(card);
    exitAdd();
}






editBtn.addEventListener('click', openProfilePopup);
addBtn.addEventListener('click', openAdd);
closeProfileBtn.addEventListener('click', exitProfile);
closeAddBtn.addEventListener('click', exitAdd);
formProfile.addEventListener('submit', hanldeProfileSubmit);
formAdd.addEventListener('submit', formSubmitHandlerAdd);

