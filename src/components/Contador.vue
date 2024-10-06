<template>
  <h2>Ejercicio 1 - Contador</h2>
  <!-- Muestra el valor del contador almacenado en Vuex -->
  <p class="counter">{{ contador }} </p>

  <div>
    <!-- Botón para incrementar el contador -->
    <button class="btn primary" @click="incrementar">+1</button>

    <!-- Botón para disminuir el contador, deshabilitado cuando contador es 0 -->
    <button class="btn warning" @click="disminuir">-1</button>
  </div>
</template>

<script>
// Se importa los helpers mapState y mapActions desde Vuex
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Contador', // Nombre del componente

  // Computed properties para mapear el estado de Vuex al componente
  computed: {
    // mapState permite acceder a propiedades del estado global de Vuex.
    // En este caso, se trae la propiedad 'contador' que es parte del estado de Vuex.
    ...mapState(['contador']),
  },

  // Métodos que despachan acciones de Vuex
  methods: {
    // mapActions nos permite vincular acciones de Vuex como métodos locales del componente.
    // Aquí se están mapeando las acciones 'incrementar' y 'disminuir', que actualizan el valor del contador en Vuex.
    ...mapActions(['incrementar', 'disminuir']),
  },
};
</script>

<style>
.btn {
  border-radius: 0.5rem;
  margin: 0 5px;
  width: 100px;
  padding: 5px;
  font-size: 1rem;
  cursor: pointer;
}

.primary {
  background-color: rgb(77, 77, 231);
  color: rgb(255, 255, 255);
}

.counter {
  font-size: 36px;
}

.warning {
  background-color: rgb(230, 53, 53);
  color: rgb(255, 255, 255);
}

/* .disabled {
  opacity: .4;
  cursor: auto;
} */
</style>
