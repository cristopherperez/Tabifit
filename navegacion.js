class Navegacion {
  constructor(rutas) {
    this.pantallaActual = "bienvenida";
    const elementoPantalla = document.querySelector("tabifit-screen#" + this.pantallaActual);
    elementoPantalla.style.display = "flex";
  }

  irAPantalla(pantallaDestino) {
      this.pantallaActual = pantallaDestino;
      const pantallas = document.querySelectorAll("tabifit-screen");
      for (let indice = 0; indice < pantallas.length; indice += 1) {
        pantallas[indice].style.display = "none";
      }
      const elementoPantalla = document.querySelector("tabifit-screen#" + this.pantallaActual);
      elementoPantalla.style.display = "flex";
  }

  agregarEntrenamientos() {
      const series = document.querySelector(".vueltasPantalla").value;
      const vueltas = document.querySelector(".seriesPantalla").value;
      //const ejercicios = document.querySelector(".ejercicio-seleccionado").checked;
      rutina.setSeries(series);
      rutina.setVueltas(vueltas);
      //rutina.setEjercicios(ejercicios);

      let tfCheck = document.querySelector("tabifit-exercises");

      if(tfCheck.shadowRoot.querySelector('.abdominales').checked)
        rutina.ejercicios.push(1);
      if(tfCheck.shadowRoot.querySelector('.sentadillas').checked)
        rutina.ejercicios.push(2);
      if(tfCheck.shadowRoot.querySelector('.flexiones').checked)
        rutina.ejercicios.push(3);
  }

  hacerEjercicios() {
    navegacion.irAPantalla('ejercicio');
    componente.ejecutarEjercicios(rutina.vueltas, rutina.series);
  }
}

const navegacion = new Navegacion();
const rutina = new Rutina();

/*bienvenida 1 */
const btnComenzar = document.querySelector("#boton-comenzar");
const btnRedirigirRepetirSesion = document.querySelector("#boton-repetir-sesion")
/*seleccion series 2 */
const btnRedirigirBienvenida = document.querySelector("#boton-redirigir-bienvenida");
const btnRedirigirSeleccionVueltas = document.querySelector("#boton-redirigir-seleccion-vueltas");
/*seleccion vueltas 3 */
const btnRedirigirSeleccionSeries = document.querySelector("#boton-redirigir-seleccion-series");
const btnRedirigirEjercicios = document.querySelector("#boton-redirigir-ejercicios");
/*seleccion ejercicios 4 */
const btnRedirigirSeleccionVueltasDos = document.querySelector("#boton-redirigir-seleccion-vueltas-dos");
const btnRedirigirCuentaRegresivaInicial = document.querySelector("#boton-redirigir-cuentaregresiva-inicial");
/*finalizacion 9 */
const btnGuardarActividad = document.querySelector("#boton-guardaractividad");
const btnRedirigirSalir = document.querySelector("#boton-salir")
/*seleccion de archivo 9 */
const btnRedirigirBienvenidaDos = document.querySelector("#boton-redirigir-bienvenida-dos");
const btnRedirigirVerificacionDeEntrenamiento = document.querySelector("#boton-redirigir-verificacionde-entrenamiento");
/*seleccion de archivo 10 */
const btnRedirigirPantallaSeleccionDeArchivo = document.querySelector("#boton-redirigir-seleccionde-archivo");
const btnRedirigirCuentaRegresivaInicialDos = document.querySelector("#boton-redirigir-cuentaregresiva-inicial-dos")

/* BOTONES PANTALLA 1 */
btnComenzar.addEventListener("click", ()=> {
  navegacion.irAPantalla("seleccionseries")});

btnRedirigirRepetirSesion.addEventListener("click",()=> {
  navegacion.irAPantalla("verificaciondeentrenamiento");
});

/*BOTONES PANTALLA 2 */
btnRedirigirBienvenida.addEventListener("click", ()=> {
  navegacion.irAPantalla("bienvenida");
});

btnRedirigirSeleccionVueltas.addEventListener("click", ()=> {
  navegacion.irAPantalla("seleccionvueltas");
});

/*BOTONES PANTALLA 3 */
btnRedirigirSeleccionSeries.addEventListener("click", ()=> {
  navegacion.irAPantalla("seleccionseries");
});

btnRedirigirEjercicios.addEventListener("click", ()=> {
  navegacion.irAPantalla("seleccionejercicios")
});

/*BOTONES PANTALLA 4 */
btnRedirigirSeleccionVueltasDos.addEventListener("click", ()=> {
  navegacion.irAPantalla("seleccionvueltas");
});

btnRedirigirCuentaRegresivaInicial.addEventListener("click", () => {
  navegacion.irAPantalla("cuentaregresivainicial");

  navegacion.agregarEntrenamientos();
  componente.cuentaPrueba(10);
});

/*BOTONES PANTALLA 8 */
btnRedirigirSalir.addEventListener("click", ()=> {
  navegacion.irAPantalla("bienvenida");
});

/*BOTONES PANTALLA 9 */
btnRedirigirBienvenidaDos.addEventListener("click", ()=> {
  navegacion.irAPantalla("bienvenida");
});

btnRedirigirVerificacionDeEntrenamiento.addEventListener("click", ()=> {
  navegacion.irAPantalla("verificaciondeentrenamiento");
});

/*BOTONES PANTALLA 10 */
btnRedirigirPantallaSeleccionDeArchivo.addEventListener("click", ()=> {
  navegacion.irAPantalla("selecciondearchivo");
});
btnRedirigirCuentaRegresivaInicialDos.addEventListener("click", ()=> {
  navegacion.irAPantalla("cuentaregresivainicial");
  componente.iniciarCuenta(10);
});