class StartCountDown extends HTMLElement {
  constructor() {
    super();
    cargarTemplate("#start-countdown", this);
    this.ciclo = null;
    this.conteo = null;
    this.numeroInicial = null;

  }
  
  cuentaPrueba(numeroInicial) {
    const componente = this.shadowRoot;
    const elementoCuentaRegresiva = componente.querySelector(".cuenta-regresiva");
    let ciclo = setInterval(function () {
      elementoCuentaRegresiva.innerHTML = numeroInicial;

    numeroInicial -= 1;

    if (numeroInicial === 0) {
        clearInterval(ciclo);
        navegacion.hacerEjercicios();
      }
    }, 1000);
  }

  ejecutarEjercicios(vueltas, series) {
    this.hacerEjercicio(0, this, vueltas, series, 1, 1);
  }

  hacerEjercicio(orden, tabfit, vueltasTotal, seriesTotal, vueltasActual, seriesActual) {
    navegacion.irAPantalla('ejercicio');
    
    const componente = document.querySelector("#cuenta-ejerciciodos").shadowRoot;
    const elementoCuentaRegresiva = componente.querySelector(".cuenta-regresiva");

    let numeroInicial = 20;
    elementoCuentaRegresiva.innerHTML = '';

    // const ejercicioAbdominales = document.getElementById('ejercicioAbs.');
    // const ejercicioSentadilla =  document.getElementById('ejercicioSent.');
    // const ejercicioFlexiones = document.getElementById('ejercicioFlex.')

    // if (ejercicio === 1){
    //   ejercicioAbdominales.style.display = "block";
    //   ejercicioSentadilla.style.display = "none";
    //   ejercicioFlexiones.style.display="none";
    // } if (ejercicio ===2){
    //   ejercicioAbdominales.style.display = "none";
    //   ejercicioSentadilla.style.display = "block";
    //   ejercicioFlexiones.style.display = "none";
    // } else (ejercicio ===3){
    //   ejercicioAbdominales.style.display = "none";
    //   ejercicioSentadilla.style.display = "none";
    //   ejercicioFlexiones.style.display = "block";
    // }

    switch (rutina.ejercicios[orden]) {
      case 1:
        document.getElementById('ejercicioAbs.').style.display = 'block';
        document.getElementById('ejercicioSent.').style.display = 'none';
        document.getElementById('ejercicioFlex.').style.display = 'none';
        break;
      case 2:
        document.getElementById('ejercicioAbs.').style.display = 'none';
        document.getElementById('ejercicioSent.').style.display = 'block';
        document.getElementById('ejercicioFlex.').style.display = 'none';
        break;
      case 3:
        document.getElementById('ejercicioAbs.').style.display = 'none';
        document.getElementById('ejercicioSent.').style.display = 'none';
        document.getElementById('ejercicioFlex.').style.display = 'block';
        break;
    }

    let ciclo = setInterval(() => {
      elementoCuentaRegresiva.innerHTML = numeroInicial;

      numeroInicial -= 1;

      if (numeroInicial === 0) {
        clearInterval(ciclo);

        if (seriesActual == seriesTotal) { 
          if (rutina.ejercicios[orden + 1]) {
            tabfit.relaxYContinuar(orden + 1, tabfit, vueltasTotal, seriesTotal, vueltasActual, 1);
          }
          else {
            if (vueltasActual == vueltasTotal) {
              navegacion.irAPantalla('finalizacion');
            }
            else {
              tabfit.relaxYContinuar(0, tabfit, vueltasTotal, seriesTotal, vueltasActual + 1, 1);
            }

          }
        } else {
          tabfit.relaxYContinuar(orden, tabfit, vueltasTotal, seriesTotal, vueltasActual, seriesActual + 1);
        }

      }
    }, 1000);
  }

  relaxYContinuar(orden, tabFit, vueltasTotal, seriesTotal, vueltasActual, seriesActual) {
    navegacion.irAPantalla("pausa");

    const componente = document.querySelector("#cuenta-regresivalatiendo").shadowRoot;
    const elementoCuentaRegresiva = componente.querySelector(".cuenta-regresiva");
    const elementoBordeLatiendo = componente.querySelector(".borde-latiendo");
    const elementoBordeGiratorio = componente.querySelector(".borde-giratorio");

    let numeroInicial = 10;
    let ciclo = setInterval(() => {
      elementoCuentaRegresiva.innerHTML = numeroInicial;
      numeroInicial -= 1;

      if (numeroInicial === 0) {
        clearInterval(ciclo);

        navegacion.irAPantalla("ejercicio");
        tabFit.hacerEjercicio(orden, tabFit, vueltasTotal, seriesTotal, vueltasActual, seriesActual);
      }

      if (numeroInicial === 2) {
        elementoBordeLatiendo.style.display = "none";
        elementoBordeGiratorio.style.display = "block";
      }
    }, 1000);
  }

  hacerRutina(numeroInicial, ejercicios, orden) {
    this.numeroInicial = numeroInicial;
    this.conteo = numeroInicial;
    const componente = document.querySelector("#cuenta-ejerciciodos").shadowRoot;
    const elementoCuentaRegresiva = componente.querySelector(".cuenta-regresiva");
    this.ciclo = setInterval(() => {
      if (this.conteo === 0) {
        if (orden <= ejercicios.length) {
          this.hacerRutina(20, ejercicios, orden);
          orden++;
        }
        else clearInterval(this.ciclo);

        if (this.conteo === 0) {
          clearInterval(this.ciclo);
        }
      }
      elementoCuentaRegresiva.innerHTML = this.conteo;
      this.conteo -= 1;
    }, 1000);
  }
//   mostrarTexto() {
//     let texto = this.shadowRoot.querySelector("#preparacion");
//     texto.innerHTML = "comienza en";
//   setTimeout(function () {
//     texto.innerHTML = "¡vamos!";
//   }, 8000);
// setTimeout(function () {
//     texto.innerHTML = "VAMOS";
//   }, 11000);
// }

}
customElements.define("start-countdown", StartCountDown);
const componente = document.querySelector("#cuenta-ejercicio");
const componentePrueba = document.querySelector("#cuenta-ejerciciodos");
// componente.iniciarCuenta(10); NO VA
// setTimeout((reiniciarCuenta) => {
//   componentePrueba.reiniciarCuenta();
// }, 1000);
