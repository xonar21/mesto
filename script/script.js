let popUp = document.querySelector('.pop-up');
let formElement = document.querySelector('.form');
let edit = document.querySelector('.profile__edit-button');
let close = document.querySelector('.pop-up__exit');
let profileName = document.querySelector('.profile__name');
let profileSubName = document.querySelector('.profile__subname');
let nameInput = document.querySelector('.form__input_profile_name');
let jobInput = document.querySelector('.form__input_profile_subname');

//открытие попапа
function open() {

    profileName.textContent = nameInput.value;
    profileSubName.textContent = jobInput.value;
    popUp.classList.add('pop-up_opened');

}
//закрытие попапа
function exit() {

    popUp.classList.remove('pop-up_opened');

}
//сохранение формы
function formSubmitHandler (evt) {

    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileSubName.textContent = jobInput.value;
    exit();
}

edit.addEventListener('click', open);
close.addEventListener('click', exit);
formElement.addEventListener('submit', formSubmitHandler);