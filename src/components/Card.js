export default class Card {
    constructor(data, cardSelector, handleCardClick) {
      this._link = data.link;
      this._name = data.name;
      this._alt = data.alt;
      this.cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
    }
   
    _getTemplate() {
      const cardElement = this.cardSelector
      .querySelector('.element')
      .cloneNode(true);
      this._cardImage = cardElement.querySelector('.element__image');
      this._cardTitle = cardElement.querySelector('.element__title');
      this._cardLike = cardElement.querySelector('.element__like');
      this._cardDelete = cardElement.querySelector('.element__delete-card');
      return cardElement;
    }
    _setEventListeners() {
      this._cardImage.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link, this._alt)
      });
      this._setLikesHandler();
      this._setDeleteHandler();
      
    }
    generateCard() {
      this._element = this._getTemplate();
      this._cardImage.src = this._link;
      this._cardTitle.textContent = this._name;
      this._cardImage.alt = this._alt;
      this._setEventListeners();
      return this._element;
    }
    
    _setLikesHandler() {
      this._cardLike.addEventListener('click', () => {
        this._cardLike.classList.toggle('element__like_active');
      });
    }
    _setDeleteHandler() {
      this._cardDelete.addEventListener('click', () => {
        const listItem = this._element;
        listItem.remove();
      });
    }
    
  }