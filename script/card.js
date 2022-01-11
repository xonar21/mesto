import {closeImgBtn, exitImg, imagePopup, imagepopUptitle, openPopup, popupImg} from './index.js';

const data = {
  image: document.querySelector('.element__image')
}

export class Card {
    constructor(data, cardSelector ) {
      this._link = data.link;
      this._name = data.name;
      this._alt = data.alt;
      this.cardSelector = cardSelector;
      //this._handleCardClick = handleCardClick;
      this._cardImage = data.image;
      
      console.log(this._cardImage);
    }
   
    _getTemplate() {
      const cardElement = this.cardSelector
      .querySelector('.element')
      .cloneNode(true);
      return cardElement;
    }
  
    _setEventListeners() {
      this._likes();
      this._del();
      this._openPopup();
      this._closePopup();
    }

    _generateCard() {
      this._element = this._getTemplate();
      
      this._element.querySelector('.element__image').src = this._link;
      this._element.querySelector('.element__title').textContent = this._name;
      this._element.querySelector('.element__image').alt = this._alt;
      return this._element;
    }
    
    _likes() {
      this._element.querySelector('.element__like').addEventListener('click', () => {
        this._element.querySelector('.element__like').classList.toggle('element__like_active');
      });
    }
    _del() {
      this._element.querySelector('.element__delete-card').addEventListener('click', () => {
        const listItem = this._element;
        listItem.remove();
      });
    }
  
    _openPopup() {
      this._element.querySelector('.element__image').addEventListener('click', () => {
        imagePopup.src = this._link;
        imagePopup.alt = this._alt;
        imagepopUptitle.textContent = this._name;
        openPopup(popupImg);
      });
    }
    _closePopup() {
      closeImgBtn.addEventListener('click', exitImg);
    }
  }