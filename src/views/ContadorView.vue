<template>
  <!-- El componente Contador se incluye dentro de la vista -->
  <div>
    <Contador />
  </div>
</template>

<script>
// Importamos el componente Contador desde la carpeta de componentes
import Contador from '@/components/Contador.vue';

export default {
  name: 'CounterView', // Nombre del componente

  // Declaramos los componentes que usaremos en esta vista
  components: {
    Contador, // Registramos el componente Contador para ser utilizado dentro de esta vista
  }
}
</script>
