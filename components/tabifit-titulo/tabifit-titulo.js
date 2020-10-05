class TabitifTitulo extends HTMLElement {
    constructor() {
        super()
        cargarTemplate("#tabifit-titulo", this);
        // if (this.attributes.titulo) {
        //     this.titulo = this.attributes.titulo.value;
        //     this.resalta = this.attributes.resalta.value;
        //     this.tituloFinal = this.titulo.replace(this.resalta, "<span style='color:#4AB4DC'>"+this.resalta+"</span>");
        // }
    }
    // connectedCallback(){
    //     const titulo = this.shadowRoot.querySelector("h1");
    //     //const resalta = this.shadowRoot.querySelector("p");
    //     titulo.innerHTML =  this.tituloFinal;
    // }
}
customElements.define("tabifit-titulo", TabitifTitulo);