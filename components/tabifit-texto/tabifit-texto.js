class TabitifTexto extends HTMLElement {
    constructor() {
        super()
        cargarTemplate("#tabifit-texto", this);
        if (this.attributes.texto) {
            this.texto = this.attributes.texto.value;
            this.resalta = this.attributes.resalta.value;
            this.textoFinal = this.texto.replace(this.resalta, "<span style='color:#4AB4DC'>"+this.resalta+"</span>");
        }
    }
    connectedCallback(){
        const texto = this.shadowRoot.querySelector("h1");
        //const resalta = this.shadowRoot.querySelector("p");
        texto.innerHTML =  this.textoFinal;
    }
}
customElements.define("tabifit-texto", TabitifTexto);