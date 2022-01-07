import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popupSelector.querySelector('.form');
        this._inputList = Array.from(this._form.querySelectorAll('.form__input'));
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
            this.close();
          });
    }

    close() {
        super.close();
        this._form.reset();
    }
}