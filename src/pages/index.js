import './index.css';

import Api from '../components/Api.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupDelete from '../components/PopupDelete.js';
import UserInfo from '../components/UserInfo.js';

import {
  submitDelete,
  submitAddCard,
  submitAvatar,
  submitProfile,
  cardListSelector,
  popupProfile,
  deletePopup,
  popupAdd,
  popupImg,
  editBtn,
  imagePopup,
  imagepopUptitle, 
  addBtn,
  cardTemplate,
  info,
  config,
  nameInput,
  subnameInput,
  ava,
  avatarPopup,
  formValidators} from '../utils/constants.js';

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-35/',
  headers: {
    authorization: '4f1e5520-cc86-4d96-8418-3f1ecec3cfa5',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo(info);

let cardsItem = [];
let cardsList = null;


//просмотр картинки
const popupView = new PopupWithImage(popupImg);


//удаление
const openDeleteCard = new PopupDelete(
  deletePopup,
  (card) => { delcard(card); });

//создание карточки
const addCard = function(item) {
 
  const card = new Card(
    {
      data: item,
      del: (card) => { openDeleteCard.open(card); },
      handleLike: (card) => { likeCard(card); }
    },
     
    cardTemplate, 
    handleCardClick

  );
  const cardElement = card.generateCard(userInfo.getUserID());

  cardsList.addItem(cardElement);
};


// лайки
const likeCard = (card) => {
  const id = card.getCardId();
  const user = userInfo.getUserID();
  const likeState = card.isLiked();
  const action = likeState ? 'удалить' : 'поставить';
  const likeFunc = likeState
    ? (cardId) => api.unlikeCard(cardId)
    : (cardId) => api.likeCard(cardId);
  

  likeFunc(id)
    .then((res) => {
      card.setLikes(res.likes);
    })
    .catch((err) => {
      console.log(`Невозможно ${action} лайк. Ошибка ${err}.`);
      card.setLikes(!likeState ? [{ _id: user }] : []);
    })
    .finally(() => {
      card.setLikeGroup(user);
    });
}

//удаление карточки
const delcard = (card) => {
  submitDelete.textContent = 'Сохранение...';
  api._delCardFromServer(card.getCardId())
    .then((res) => {
      card.del();
    })
    .catch((err) => {
      console.log(`Невозможно удалить карточку. Ошибка ${err}.`);
    })
    .finally(() => {
      openDeleteCard.close(); 
      submitDelete.textContent = 'Сохранить';
    });
  
};

//добавление карточки
const openAddCard = new PopupWithForm( 
  popupAdd, 
  (item) => {
    submitAddCard.textContent = 'Сохранение...';
    api._postCard({name: item.title, link: item.link})
      .then((res) => {
        
        addCard({
          name: res.name, 
          link: res.link, 
          likes: res.likes, 
          owner: res.owner._id,
          id: res._id
        })
        
       
      })
      .catch((err) => {
        console.log(`Невозможно сохранить карточку на сервере. Ошибка ${err}.`);
      })
      .finally(() => {
        openAddCard.close(); 
        submitAddCard.textContent = 'Сохранить';
      });
  }
);


//редактирование аватара
const openAvatar = new PopupWithForm(
  avatarPopup,
  (data) => { saveAvatar(data); });

function saveAvatar(data) {
    submitAvatar.textContent = 'Сохранение...';
    api.patchAvatar(data)
    
      .then((res) => {
        userInfo.setUserAvatar(res.avatar);
        userInfo.setUserId(res._id);
      })
      .catch((err) => {
        console.log(`Невозможно обновить аватар на сервере. ${err}.`);
      })
      .finally(() => {
        openAvatar.close();
        submitAvatar.textContent = 'Сохранить';
      });
  }

  //редактирование профиля
const openProfile = new PopupWithForm(popupProfile,
  (data) => { saveUserProfileServer(data); });

function saveUserProfileServer(Data) {
  submitProfile.textContent = 'Сохранение...';
  api._pathEditProfile(Data)
    .then((res) => {
      console.log(res._id)
      userInfo.setUserInfo({ name: res.name, subname: res.about });
      userInfo.setUserId(res._id);
    })
    .catch((err) => {
      console.log(`Невозможно обновить профиль пользователя. ${err}.`);
    })
    .finally(() => {
      openProfile.close();
      submitProfile.textContent = 'Сохранить';
    });
}


function handleCardClick(name, link, alt) {
  imagePopup.src = link;
  imagePopup.alt = alt;
  imagepopUptitle.textContent = name;
  popupView.open({name,link});
}


//валидация
  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
      const validator = new FormValidator(formElement, config);
      const formName = formElement.getAttribute('name');
      formValidators[formName] = validator;
      validator.enableValidation();
    });
  };

//слушатели
openProfile.setEventListeners();
openAddCard.setEventListeners();
popupView.setEventListeners();
openDeleteCard.setEventListeners();
openAvatar.setEventListeners();

editBtn.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  subnameInput.value = userData.subname;
  openProfile.open();
  formValidators.edit.resetValidation();
});
addBtn.addEventListener('click',() => {
  openAddCard.open();
  formValidators.add.resetValidation();
});

ava.addEventListener('click', () => {
  const avatar = userInfo.getUserAvatar();
  openAvatar.open({ avatar });
});

enableValidation(config);


//данные с сервера
api._getUserInformation()
  .then((res) => {
    
    userInfo.setUserInfo({name: res.name, subname: res.about});
    userInfo.setUserAvatar(res.avatar);
    userInfo.setUserId(res._id);
  })
  .catch((err) => {
    console.log(`Информация с сервера не получена. ${err}.`);
  })
  .finally(() => {
    api._getCardsFromServer()
      .then((res) => {
       
        console.log('Информация о карточках получена');
       
        cardsItem = res.map(item => {
          return {
            name: item.name,
            likes: item.likes,
            link: item.link,
            id: item._id,
            owner: item.owner._id
          }
        });
      })
      .catch((err) => {
        console.log(`Информация о карточках не получена.${err}.`);
      })
      .finally(() => {
        
        cardsList = new Section(
          { data: cardsItem, renderer: (item) => addCard(item) }, 
          cardListSelector);
        cardsList.renderItems();

        });
  });

 

 
  