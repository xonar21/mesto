import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitHandler) {
        super(popupSelector);
        this._form = this._popupSelector.querySelector('.form');
        this._inputList = Array.from(this._form.querySelectorAll('.form__input'));
        this._submitHandler = submitHandler;
    }

    _getInputValues() {
        const inputValues = {};
        this._inputList.forEach((input) => {
          inputValues[input.name] = input.value;
        });
        return inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHandler(this._getInputValues());
          });
    }

    open(values = {}) {
        this._inputList.forEach((input) => {
          input.value = values[input.name] || '';
        });
        super.open();
      }

    close() {
        super.close();
        this._form.reset();
    }
}