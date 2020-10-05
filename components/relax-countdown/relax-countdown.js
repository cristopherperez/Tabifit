class RelaxCountDown extends HTMLElement {
    constructor(){
        super();
        cargarTemplate("#relax-countdown", this);
    }


iniciarCuenta(numeroInicial) {    
    this.numeroInicial = numeroInicial;
    this.conteo = numeroInicial;
    // this.relax = "relax";
    // this.preparate = "preparate";
    // this.vamos= "vamos";
    
    const componente = this.shadowRoot;
    const elementoCuentaRegresiva = componente.querySelector(".cuenta-regresiva");
    const elementoBordeLatiendo = componente.querySelector(".borde-latiendo");
    const elementoBordeGiratorio = componente.querySelector(".borde-giratorio");
    const elementoRelax = document.getElementById("relax").style.display = "block";
    const elementoPreparate = document.getElementById("preparate").style.display = "none";
    const elementoVamos = document.getElementById("vamos").style.display = "none"
    // const elementoRelax = document.querySelector(".relax");
    // const elementoPreparate = document.querySelector(".preparate");
    // const elementoVamos = document.querySelector(".vamos");
    

    this.ciclo = setInterval(() => {
     
      if(this.conteo === 0) {
        this.pausarCuenta();
      }
      elementoCuentaRegresiva.innerHTML = this.conteo;
      this.conteo -= 1;
      // elementoRelax.innerHTML = "relax";
      // elementoPreparate.innerHTML = "preparate";
      // elementoVamos.innerHTML = "vamos";

      if (this.conteo === 10 ) {
        elementoRelax.style.display = "block";
        elementoPreparate.style.display = "none";
        elementoVamos.style.display = "none"
      }
      
      if (this.conteo === 8) {
      elementoRelax.style.display = "none";
      elementoPreparate.style.display = "block";
      elementoVamos.style.display = "none"
    }
    
      if (this.conteo === 3) {
      elementoRelax.style.display = "none";
      elementoPreparate.style.display = "none";
      elementoVamos.style.display = "block"
    }

    if (this.conteo === 2) {
		  elementoBordeLatiendo.style.display = "none";
      elementoBordeGiratorio.style.display = "block";
    }
    }, 1000);
  }

  pausarCuenta() {
    clearInterval(this.ciclo);
  }
  
  mostrarTexto() {
      let texto = document.querySelector(".texto");
      texto.innerHTML = "relax";
      
    setTimeout( ()=> {
      texto.innerHTML = "¡preparate!";
    }, 8000);
  setTimeout( ()=> {
      texto.innerHTML = "VAMOS";
    }, 11000);
   
  }
  
}


customElements.define("relax-countdown", RelaxCountDown);

