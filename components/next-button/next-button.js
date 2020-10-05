class NextButton extends HTMLElement {
    constructor(){
        super();
        cargarTemplate("#next-button", this);
    }
}
customElements.define("next-button", NextButton);