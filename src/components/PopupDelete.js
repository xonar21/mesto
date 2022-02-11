import Popup from './Popup.js';

export default class PopupDelete extends Popup {
    constructor(popupSelector, submitHandler) {
        super(popupSelector);
        this._form = this._popupSelector.querySelector('.form');
        this._inputList = Array.from(this._form.querySelectorAll('.form__input'));
        this._submitHandler = submitHandler;
    }


    

    

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHandler(this._element);
          });
    }


    open(card) {
        super.open();
        this._element = card;
      }

    close() {
        super.close();
        this._form.reset();
    }

    
}