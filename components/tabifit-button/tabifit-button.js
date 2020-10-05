class TabifitButton extends HTMLElement {
    constructor(){
        super();
        cargarTemplate("#tabifit-button", this);
    }
}
customElements.define("tabifit-button", TabifitButton);