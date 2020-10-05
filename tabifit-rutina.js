class Rutina {
    constructor() {
        this.series = 0;
        this.vueltas = 0;
        this.ejercicios = [];
    }

    setSeries(series) {
        this.series = series;
    }

    setVueltas(vueltas) {
        this.vueltas = vueltas;
    }

    setEjercicios(ejercicios) {
        this.ejercicios = ejercicios;
    }

    agregarEjercicio(series, vueltas, ejercicios, fecha){
        
        
        fetch( "", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({series, vueltas, ejercicios, fecha})
          }).then((res)=> {
            return res.json();
          }).then ((res)=>{
            this.agregarEjercicio(res.Rutina);
          });
    }

}

    const guardarActividad = document.querySelector("#boton-guardaractividad");
    guardarActividad.addEventListener("click", () => {
    agregarEjercicio()
    })
//llamar fetch
// class Entrenamiento {
//     constructor(seriesRealizadas){
//         this.seriesRealizadas = seriesRealizadas;
//     }
//     obtenerSeries() {
//         this.seriesRealizadas = document.querySelector(".seriesRealizadas");

//     }
// }