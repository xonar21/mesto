import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popupSelector.querySelector('.image');
        this._caption = this._popupSelector.querySelector('.title');
      }
      open({ name, link }) {
        this._image.src = link;
        this._image.alt = name;
        this._caption.textContent = name;
        super.open();
      }
}