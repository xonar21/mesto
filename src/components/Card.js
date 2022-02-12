export default class Card {
    constructor({data, del, handleLike}, cardTemplate, handleCardClick, deletePopup) {
      this._link = data.link;
      this._name = data.name;
      this._alt = data.name;
      this._likes = data.likes;
      this._isLiked = false;
      this._owner = data.owner;
      this._id = data.id;
      this._delete = del;
      this._like = handleLike;
      this.cardTemplate = cardTemplate;
      this._handleCardClick = handleCardClick;
      this._deletePopup = deletePopup;
      
    
    }
   
    _getTemplate() {
      const cardElement = this.cardTemplate
      .querySelector('.element')
      .cloneNode(true);
      this._cardImage = cardElement.querySelector('.element__image');
      this._cardTitle = cardElement.querySelector('.element__title');
      this._cardLike = cardElement.querySelector('.element__like');
      this._cardDelete = cardElement.querySelector('.element__delete-card');
      this._cardLikeCount = cardElement.querySelector('.element__like-count');
      return cardElement;
    }
    _setEventListeners() {
      this._cardImage.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link, this._alt);
      });
      this._cardDelete.addEventListener('click', () => this._delete(this));
      this._cardLike.addEventListener('click', () => this._like(this));
      
    }
    generateCard(userId) {
      this._element = this._getTemplate();
      this._cardImage.src = this._link;
      this._cardTitle.textContent = this._name;
      this._cardImage.alt = this._alt;
      this._cardLikeCount.textContent = String(this._likes.length);
      const myCard = (this._owner === userId);
      this._cardDelete.disabled = !myCard;
      this._cardDelete.hidden = !myCard;
      this.setLikeGroup(userId);
      this._setEventListeners();
      return this._element;
    }
    del() {
      this._element.remove();
      this._element = null;
    }

    getCardId() { return this._id; };

    _setLikeButton() {
      this._cardLike.classList.add('element__like_active');
    }
  
    _unsetLikeButton() {
      this._cardLike.classList.remove('element__like_active');
    }

    setLikes(likes) { this._likes = likes; }

    isLiked() { return this._isLiked; }

    setLikeGroup(userId) {
      this._isLiked = this._likes.some( user => user._id === userId );
      this._cardLikeCount.textContent = String(this._likes.length);
      if (this._likes.length) this._setLikeButton();
        else this._unsetLikeButton();
    }  
  }