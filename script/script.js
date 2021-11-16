/*form_open*/
let formContainer = document.querySelector('.form-container');
let pop_up = document.querySelector('.pop-up');
let formElement = document.querySelector('.form');
let edit = document.querySelector('.profile__edit-button');
let close = document.querySelector('.exit');
let profileName = document.querySelector('.profile__name');
let profileSubName = document.querySelector('.profile__subname');
let nameInput = document.querySelector('.form__input_profile_name');
let jobInput = document.querySelector('.form__input_profile_subname');


//открытие попапа
function clicked() {

    profileName.textContent = nameInput.value;
    profileSubName.textContent = jobInput.value;
    formContainer.classList.add('form-container_display_block');
    pop_up.classList.add('pop-up_display_flex');

}
//закрытие попапа
function exit() {

    formContainer.classList.remove('form-container_display_block');
    pop_up.classList.remove('pop-up_display_flex');

}
//сохранение формы
function formSubmitHandler (evt) {

    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileSubName.textContent = jobInput.value;

}

edit.addEventListener('click', clicked);
close.addEventListener('click', exit);
formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', exit);