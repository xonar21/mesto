export default class Section {
    constructor({data, renderer}, containerSelector) {
        this._renderedItems = data;
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
       
    }

    addItem(element) {
        this._container.append(element);
    }

    renderItems() {
        
        this._renderedItems.forEach((item) => {
          this._renderer(item);
        });
    }
}