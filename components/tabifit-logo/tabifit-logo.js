class TabifitLogo extends HTMLElement {
    constructor(){
        super();
        cargarTemplate("#tabifit-logo", this);
    }
}
customElements.define("tabifit-logo", TabifitLogo);