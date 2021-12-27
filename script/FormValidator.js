export class FormValidator {
  constructor(formElement, config) {
    this._form = formElement;
    this._submit = formElement.querySelector(config.submitBtnSelector);
    this._inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    this._inputErrorClass = config.inputErrorClass;
    this._errorButton = config.unActiveSubmit;
  }
 
  _showError (inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-err`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
  };
  
  _hideError (inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-err`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = ''; 
  };


  _checkInputValidity (inputElement) {
    if (!inputElement.validity.valid) {
        this._showError(inputElement, inputElement.validationMessage);
    } else {
        this._hideError(inputElement);
    } 
  };

   _hasInvalidInput () {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

   _toggleButtonState ()  {
    if (this._hasInvalidInput(this._inputList)) {
      this._submit.setAttribute('disabled', 'disabled');
      this._submit.classList.add(this._errorButton);
    } else {
      this._submit.removeAttribute('disabled');
      this._submit.classList.remove(this._errorButton);
    }
  };

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input',() => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
    });
  });
  }
  
  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}