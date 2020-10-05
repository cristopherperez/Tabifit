class TabifitExercises extends HTMLElement {	
    constructor(){	
      super();	
      cargarTemplate("#tabifit-exercises", this);   

      
    }

//     // esta es la forma? 
// abdominales.addEventListener("click", ()=>{
//   const abdominales = this.shadowRoot.querySelector(".abdominales").checked;
//   fetch( "http://localhost:3000/api/ejercicio", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json"
//     }
//     body: JSON.stringify({abdominales})
//   }).then((res)=> {
//     return res.json();
//   }).then ((res)=>{
//     for (let indice=0; indice<res.ejercicios.length; indice +=1){
//       const ejercicios = res.ejercicios[indice];
//     };
//   });
// })   

// o esta otra?
obtenerEjercicios() {
  const abdominales = this.shadowRoot.querySelector(".abdominales").checked;
  const sentadillas = this.shadowRoot.querySelector(".sentadillas").checked;
  const flexiones = this.shadowRoot.querySelector(".flexiones").checked;
  const ejercicioAbs = this.shadowRoot.querySelector("#ejercicioAbs.");
  const ejercicioSent = this.shadowRoot.querySelector("#ejercicioSent.");
  const ejercicioFlex = this.shadowRoot.querySelector("#ejercicioFlex.");
  const tipoEjercicio = this.shadowRoot.querySelector("[data-afectatotalejercicio]");
}

}
// abdominales.addEventListener("click", ()=>{
// if(abdominales.checked){
//   ejercicioAbs.style.display = "block";
// } else{
//   ejercicioAbs.style.display = "none";
// }
// });

// }
  

fetch( "http://localhost:3000/api/ejercicio", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res)=> {
    return res.json();
  }).then ((res)=>{
    console.log(res);
  });

customElements.define("tabifit-exercises", TabifitExercises);

//DENTRO DE LA FUNCION OBTENER EJERCICIOS:
  // const valorAbdominales = "Abs.";
  // const valorSentadillas = "Sent.";
  // const valorFlexiones = "Flex.";
  // this.contenedor = this.shadowRoot.querySelector(".contenedor");

// configurarCheckbox(){
// this.contenedor.addEventListener('click',()=> {
//   if (checkBox.checked==true){
//     text.style.display="block";
//   } else {
//     text.style.display = "none";
//   }
// })
// }

// let ejercicios = [abdominales, sentadillas, flexiones];
  // return ejercicios;

  // if (abdominales) { 
  //   this.ejercicio = valorAbdominales;
  // }
  
  // if (sentadillas) { 
  //   this.ejercicio = valorSentadillas;
  // }
  
  // if (flexiones) {
  //   this.ejercicio = valorFlexiones;
  // }
  
  // const afectaTotal = this.shadowRoot.querySelectorAll("[data-afectatotalejercicio='true']");
  // for (let indice = 0; indice < afectaTotal.length; indice += 1) {
  // afectaTotal[indice].addEventListener("change", claseEjercicio);
  // }

// }

// actualizarTipoEjercicio() {
//   const tipoEjercicio = this.shadowRoot.querySelector("[data-afectatotalejercicio]");
//   this.tipoEjercicio.value = tipoEjercicio;  
