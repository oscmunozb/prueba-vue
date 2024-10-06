// Se importa la función createStore desde Vuex para crear nuestra tienda de estado
import { createStore } from 'vuex'

export default createStore({
  // Estado global que contiene el valor inicial del contador
  state: {
    contador: 0 // El contador inicia en 0
  },

  // Mutations: son las únicas encargadas de modificar directamente el estado
  mutations: {
    // Aumenta el valor del contador en 1
    aumentar(state) {
      state.contador++ // Incrementa el valor de contador
    },

    reducir(state) {
      state.contador-- // Decrementa el valor de contador
    }
  },

  // Actions: funciones que permiten realizar operaciones asíncronas
  actions: {
    // Acción para incrementar el contador
    // Esta acción recibe el método commit que se utiliza para llamar a una mutation
    incrementar({ commit }) {
      commit('aumentar') // Ejecuta la mutation 'aumentar'
    },

    // Acción para disminuir el contador
    disminuir({ commit }) {
      commit('reducir') // Ejecuta la mutation 'reducir'
    }
  },

  // Getters: permiten obtener valores derivados del estado global
  getters: {
    // Getter para acceder al valor actual del contador en el estado
    contador: (state) => state.contador // Retorna el valor de contador desde el estado
  }
})
