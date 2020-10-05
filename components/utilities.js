
function cargarTemplate(referenciaTemplate, instanciaComponente) {
  const template = document.querySelector(referenciaTemplate);
  const templateContent = template.content;
  instanciaComponente.attachShadow({ mode: "open" })
  .appendChild(templateContent.cloneNode(true));
}

//sacar todo lo de rutina y ponerlo en una clase que se tipo manejador rutina
// let rutina = new Rutina();

// function asignarSeriesRutina() {
//     rutina.setSeries(5);
//   }

//   function asignarVueltasRutina() {
//     rutina.setVueltas(3);
//   }

//   function obtenerRutina() {
//     return rutina;
//   }