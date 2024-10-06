<template>
    <div>
      <!-- Título del ejercicio -->
      <h2>Ejercicio 3 - Comunicación entre componentes</h2>
  
      <!-- Sección que muestra el mensaje enviado desde el componente Child -->
      <h3>Mensaje enviado por Child:</h3>
      <!-- Componente Child, que emite el evento 'mensajeEnviado' cuando se hace clic en su botón -->
      <Child @mensajeEnviado="mostrarMensaje" />
  
      <!-- Sección que muestra el mensaje recibido en el componente Parent -->
      <h3>Mensaje recibido por Parent:</h3>
      <!-- Componente Parent que recibe el mensaje a través de la prop 'mensajeDesdeChild' -->
      <Parent :mensajeDesdeChild="mensajeDesdeChild" />
    </div>
  </template>
  
  <script>
    // Importa los componentes Child y Parent
    import Child from '@/components/Child.vue';
    import Parent from '@/components/Parent.vue';
  
    export default {
      name: 'ParentChildView', // Nombre del componente
  
      // Registro de los componentes Child y Parent para usarlos en el template
      components: {
        Child,
        Parent
      },
  
      // Data del componente
      data() {
        return {
          // Variable que almacena el mensaje enviado desde el componente Child
          mensajeDesdeChild: ''
        };
      },
  
      // Métodos del componente
      methods: {
        // Método que se ejecuta cuando se recibe el evento 'mensajeEnviado' desde el Child
        // Actualiza la variable 'mensajeDesdeChild' con el texto recibido
        mostrarMensaje(texto) {
          this.mensajeDesdeChild = texto;
        }
      }
    };
  </script>
  