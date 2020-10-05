// class TabifitCuentaRegresivaEjercicio extends HTMLElement {
//     constructor() {
//       super();
//       cargarTemplate("#exercise-countdown", this);
//       this.ciclo = null;
//       this.conteo = null;
//       this.numeroInicial = null;
  
//     }
  
    
//    iniciarCuenta(numeroInicial) { 
//      this.numeroInicial = numeroInicial;   
//       this.conteo = numeroInicial;
//       const componente = this.shadowRoot;
//       const elementoCuentaRegresiva = componente.querySelector(".cuenta-regresivaejercicio");
//       this.ciclo = setInterval(() => {
//         if(this.conteo === 0) {
//           navegacion.irAPantalla("ejercicio");
//         }
//         elementoCuentaRegresiva.innerHTML = this.conteo;
//         this.conteo -= 1;
//       }, 1000);
//     }
//      pausarCuenta() {
//       clearInterval(this.ciclo);
//     }
//   }
  
//   customElements.define("exercise-countdown", TabifitCuentaRegresivaEjercicio);
  
//   const componente = document.querySelector("exercise-countdown");