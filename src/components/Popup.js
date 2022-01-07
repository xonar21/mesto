export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._exitbutton = popupSelector.querySelector('.pop-up__exit');
    }
    _handleEscClose(evt) {
        
         if (evt.key === 'Escape') {
            this.close();
        }
    }
    _handleOverlayClose(evt) {
        if (evt.target === evt.currentTarget) {
            this.close();
            
        }
    }
    setEventListeners() {
        this._exitbutton.addEventListener('click', () => {
            this.close();
        });
        this._popupSelector.addEventListener('click', (evt) => {
            this._handleOverlayClose(evt);
        });
    }
    open() {
        this._popupSelector.classList.add('pop-up_opened');
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });
    }

    close() {
        this._popupSelector.classList.remove('pop-up_opened');
    }
}