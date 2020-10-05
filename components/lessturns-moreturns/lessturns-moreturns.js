class LessTurnsMoreTurns extends HTMLElement {
    constructor() {
      super();
      cargarTemplate("#lessturns-moreturns", this);
  
      this.cantidadVueltas = 2;
  
      this.actualizarConteoVueltas();
  
      const botonAgregarVueltas = this.shadowRoot.querySelector(".inc");
      const botonQuitarVueltas = this.shadowRoot.querySelector(".dec");
  
      botonAgregarVueltas.addEventListener("click", this.agregarVueltas);
      botonQuitarVueltas.addEventListener("click", this.quitarVueltas);
     
    }
    
      calcularTotal = () => {
      const cantidadVueltas = 1;
      const vueltas = this.shadowRoot.querySelector("[data-vueltas]").value;
      const totalVueltas = cantidadVueltas;
      const vueltasPantalla = document.querySelector(".vueltasPantalla");
      vueltasPantalla.value = totalVueltas * vueltas;
    }
  
    agregarVueltas = () => {
      if (this.cantidadVueltas >=10) {
        return;
      }
      this.cantidadVueltas += 1;
      this.actualizarConteoVueltas();
      this.calcularTotal();
      
    }
  
    quitarVueltas = () => {
      if (this.cantidadVueltas <= 1) {
        return;
      }
      this.cantidadVueltas -= 1;
      this.actualizarConteoVueltas();
      this.calcularTotal();
    }
  
    actualizarConteoVueltas() {
      const vueltas = this.shadowRoot.querySelector("[data-vueltas]");
      vueltas.value = this.cantidadVueltas;
    }

  }
  
  customElements.define("lessturns-moreturns", LessTurnsMoreTurns);