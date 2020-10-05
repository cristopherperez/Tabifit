class TaskList extends HTMLElement {
  constructor(){
    super();
    cargarTemplate("#task-list", this);
    // asignarVueltasRutina(); no esta declarado, por futuro cambio
  }
}
// const listaEjercicios = [

 //]
customElements.define("task-list", TaskList);

