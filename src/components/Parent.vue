<template>
    <div>
      <!-- Se muestra el texto recibido desde el componente Child usando la prop 'mensajeDesdeChild' -->
      <p>Texto recibido : {{ mensajeDesdeChild }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Parent', // Nombre del componente
  
    // Definición de las propiedades que recibe el componente
    props: {
      // Propiedad 'mensajeDesdeChild' que recibirá el texto enviado desde el componente Child
      mensajeDesdeChild: {
        type: String, // Tipo de dato que se espera: String
        default: ''   // Valor por defecto de la propiedad en caso de no recibir ningún valor
      }
    }
  };
  </script>
  