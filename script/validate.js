const showError = (formElement, inputElement, errorMessage) => {
    
    const errorElement = formElement.querySelector(`.${inputElement.id}-err`);
 
    
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
  };
  
  const hideError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-err`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.textContent = ''; 
  };
  
  
  
  const checkInputValidity = (formElement,inputElement, form) => {
    if (!inputElement.validity.valid) {
       showError(formElement, inputElement, inputElement.validationMessage, form);
    } else {
      hideError(formElement, inputElement, form);
    }
    
  };
  
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  
  
  
  
  const toggleButtonState = (inputList, buttonElement) => {
    
    if (hasInvalidInput(inputList)) {
        buttonElement.setAttribute('disabled', 'disabled');
        buttonElement.classList.add('form__input-error_active');
    } else {
        buttonElement.removeAttribute('disabled');
        buttonElement.classList.remove('form__input-error_active');
    }
  };
  
  
  
  function setEventListeners(formElement, form) {
    const inputList = Array.from(formElement.querySelectorAll(`${form.inputSelector}`));
    const buttonElement = formElement.querySelector(`${form.submitButtonSelector}`);
    
    
    toggleButtonState(inputList,buttonElement);
    inputList.forEach((inputElement) => {
      
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, form);
      toggleButtonState(inputList,buttonElement,formElement);
    });
  }); 
  } 
  
  function enableValidation(form) {
    const formList = Array.from(document.querySelectorAll(`${form.formSelector}`));
   
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement, form);
      
  }); 
  }
  

  enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inputErrorClass: '.form__input-error',
    fieldSelector: '.form__field'
  }); 

 