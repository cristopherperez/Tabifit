class TabifiSeries extends HTMLElement {
  constructor(){
    super();
    cargarTemplate("#tabifit-series", this);
    
    this.cantidadSeries = 6;
    this.seriesActual = 0;
    this.actualizarConteoSeries();

    const botonAgregarSeries = this.shadowRoot.querySelector(".mas");
    const botonQuitarSeries = this.shadowRoot.querySelector(".menos");

    botonAgregarSeries.addEventListener("click", this.agregarSeries);
    botonQuitarSeries.addEventListener("click", this.quitarSeries);

  }

  calcularTotal = () => {
    const cantidadSeries = 1;
    const series = this.shadowRoot.querySelector("[data-series]").value;
    const seriesPantalla = document.querySelector(".seriesPantalla");
    seriesPantalla.value = cantidadSeries * series;
  }
  agregarSeries = () => {
    if (this.cantidadSeries >=10) {
      return;
    }
    this.cantidadSeries += 1;
    this.actualizarConteoSeries();
    this.calcularTotal();
    
  }

  quitarSeries = () => {
    if (this.cantidadSeries <= 1) {
      return;
    }
    this.cantidadSeries -= 1;
    this.actualizarConteoSeries();
    this.calcularTotal();
  }
  actualizarConteoSeries() {
    const series = this.shadowRoot.querySelector("[data-series]");
    series.value = this.cantidadSeries;
  }

  mostrarSeries(){
    const seriesHechas = document.querySelector(".seriesRealizadas").value;
    seriesHechas.innerHTML = seriesActual;
  }

}

customElements.define("tabifit-series", TabifiSeries);