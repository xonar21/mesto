const Validation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inputErrorClass: '.form__input-error',
  fieldSelector: '.form__field'
};
class FormValidator {
  constructor(valid) {
    this.formSelector = valid.formSelector;
    this.inputSelector = valid.inputSelector;
    this.submitButtonSelector = valid.submitButtonSelector;
    this.inputErrorClass = valid.inputErrorClass;
    this.fieldSelector = valid.fieldSelector;
  }
 
  _showError (formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-err`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
  };
  
  _hideError (formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-err`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.textContent = ''; 
  };


  _checkInputValidity (formElement,inputElement) {
      if (!inputElement.validity.valid) {
         this._showError(formElement, inputElement, inputElement.validationMessage);
      } else {
        this._hideError(formElement, inputElement);
      }
  };


   _hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

   _toggleButtonState (inputList, buttonElement)  {
    
    if (this._hasInvalidInput(inputList)) {
        buttonElement.setAttribute('disabled', 'disabled');
        buttonElement.classList.add('form__input-error_active');
    } else {
        buttonElement.removeAttribute('disabled');
        buttonElement.classList.remove('form__input-error_active');
    }
  };

  _setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(`${this.inputSelector}`));
    const buttonElement = formElement.querySelector(`${this.submitButtonSelector}`);

     this._toggleButtonState(inputList,buttonElement);
    inputList.forEach((inputElement) => {
      
    inputElement.addEventListener('input',() => {
      this._checkInputValidity(formElement, inputElement);
      this._toggleButtonState(inputList,buttonElement,formElement);
    });
  });

  }
  


  enableValidation() {
    const formList = Array.from(document.querySelectorAll(`${this.formSelector}`));
    
    formList.forEach((formElement) => {
      
      formElement.addEventListener('submit', (evt) => {
        
        evt.preventDefault();
      });
      this._setEventListeners(formElement);
      
  }); 
  }

}

export const formValidor = new FormValidator(Validation);



