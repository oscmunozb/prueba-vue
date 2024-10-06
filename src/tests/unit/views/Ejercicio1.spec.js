// Importamos shallowMount para montar el componente de forma superficial sin renderizar hijos
import { shallowMount } from '@vue/test-utils'
// Importamos el componente Contador
import Contador from '@/components/Contador.vue'
// Importamos la tienda de Vuex
import store from '@/store'

describe('Contador.vue', () => {
  // Test 1: Verificar que el valor inicial del contador sea 0
  test('Verificar que se reciba un valor inicial en el contador (0)', () => {
    // Montamos el componente con shallowMount y conectamos la tienda
    const wrapper = shallowMount(Contador, { global: { plugins: [store] } })
    // Comprobamos que el texto dentro del elemento con la clase 'counter' sea '0'
    expect(wrapper.find('.counter').text()).toBe('0')
  })

  // Test 2: Probar la funcionalidad de incremento del contador
  test('Probar la funcionalidad de incremento del contador', async () => {
    // Montamos el componente
    const wrapper = shallowMount(Contador, { global: { plugins: [store] } })
    // Simulamos un clic en el botón de incrementar (clase 'primary')
    await wrapper.find('.btn.primary').trigger('click')
    // Verificamos que el valor del estado en Vuex haya incrementado a 1
    expect(store.state.contador).toBe(1)
  })

  // Test 3: Probar la funcionalidad de decremento del contador
  test('Probar la funcionalidad de decremento del contador', async () => {
    // Se resetea el valor del contador
    store.state.contador = 0
    // Montamos el componente
    const wrapper = shallowMount(Contador, { global: { plugins: [store] } })
    // Simulamos un clic en el botón de disminuir (clase 'warning')
    await wrapper.find('.btn.warning').trigger('click')
    // Verificamos que el valor del estado en Vuex haya decrementado a 0
    expect(store.state.contador).toBe(-1)
  })
})
