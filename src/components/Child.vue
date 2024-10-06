<template>
    <div>
      <!-- Input donde el usuario escribe el texto que se enviará al componente Parent -->
      <input v-model="texto" placeholder="Escribe el texto que enviara a Parent.vue" />
  
      <!-- Botón que, al hacer clic, ejecuta el método 'enviarMensajeAlPadre' para emitir el texto al componente Parent -->
      <button @click="enviarMensajeAlPadre">Enviar</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Child', // Nombre del componente
  
    // Data local del componente
    data() {
      return {
        // Variable 'texto' que almacena el valor ingresado en el input
        texto: ''
      };
    },
  
    // Métodos del componente
    methods: {
      // Método que emite el evento 'mensajeEnviado' junto con el texto al componente Parent
      enviarMensajeAlPadre() {
        this.$emit('mensajeEnviado', this.texto); // Envía el texto mediante un evento personalizado
      }
    }
  };
  </script>
  