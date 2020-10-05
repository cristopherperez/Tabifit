class PreviousButton extends HTMLElement {
    constructor(){
        super();
        cargarTemplate("#previous-button", this);
    }
}
customElements.define("previous-button", PreviousButton);