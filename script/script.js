/*like*/

let like = document.querySelectorAll('img.element__like');

function likes0 () {
    
    if (like[0].src === "file:///E:/dev/mesto/images/like.svg") {
        like[0].src = "./images/Union.svg";
    } else {
        like[0].src = "./images/like.svg";
    }

}

function likes1 () {

    if (like[1].src === "file:///E:/dev/mesto/images/like.svg") {
        like[1].src = "./images/Union.svg";
    } else {
        like[1].src = "./images/like.svg";
    }

}

function likes2 () {

    if (like[2].src === "file:///E:/dev/mesto/images/like.svg") {
        like[2].src = "./images/Union.svg";
    } else {
        like[2].src = "./images/like.svg";
    }

}

function likes3 () {

    if (like[3].src === "file:///E:/dev/mesto/images/like.svg") {
        like[3].src = "./images/Union.svg";
    } else {
        like[3].src = "./images/like.svg";
    }

}

function likes4 () {

    if (like[4].src === "file:///E:/dev/mesto/images/like.svg") {
        like[4].src = "./images/Union.svg";
    } else {
        like[4].src = "./images/like.svg";
    }

}

function likes5 () {

    if (like[5].src === "file:///E:/dev/mesto/images/like.svg") {
        like[5].src = "./images/Union.svg";
    } else {
        like[5].src = "./images/like.svg";
    }

}

like[0].addEventListener('click', likes0);
like[1].addEventListener('click', likes1);
like[2].addEventListener('click', likes2);
like[3].addEventListener('click', likes3);
like[4].addEventListener('click', likes4);
like[5].addEventListener('click', likes5);

/*like*/

/*form_open*/

let edit = document.querySelector('.profile__edit-button');

function click() {

    document.getElementsByClassName('form')[0].style= "display: flex";
    document.getElementsByClassName('overlay')[0].style= "display: block";

}

edit.addEventListener('click', click);

/*form_open*/

/*form_close*/

let close = document.querySelector('.form__exit');

function exit() {

    document.getElementsByClassName('form')[0].style= "display: none";
    document.getElementsByClassName('overlay')[0].style= "display: none";

}

close.addEventListener('click', exit);

/*form_close*/

/*form_save*/

let save = document.querySelector('.form__button');

let profileName = document.querySelector('.profile__name');

let profileSubName = document.querySelector('.profile__subname');

let formElement = document.querySelector('.form');

let nameInput = document.querySelector('.form__name');

let jobInput = document.querySelector('.form__subname');

nameInput.value = profileName.textContent;

jobInput.value = profileSubName.textContent;

function formSubmitHandler (evt) {

    evt.preventDefault();

    profileName.textContent = nameInput.value;

    profileSubName.textContent = jobInput.value;

}

formElement.addEventListener('submit', formSubmitHandler);

save.addEventListener('click', exit);

/*form_save*/