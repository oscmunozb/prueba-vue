import { mount } from '@vue/test-utils' // Importa la función 'mount' para montar componentes
import { createRouter, createWebHistory } from 'vue-router' // Importa las funciones para configurar Vue Router

// Importa las vistas a probar
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'

describe('Navegación con Vue Router', () => {
  test('Probando la existencia de la vista HomeView', async () => {
    // Crea el enrutador con la historia web y define la ruta para HomeView
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/', // Ruta para HomeView
          name: 'HomeView',
          component: HomeView
        }
      ]
    })

    router.push('/') // Empuja la ruta '/'
    await router.isReady() // Espera a que el enrutador esté listo

    // Monta el componente HomeView con el enrutador configurado
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router] // Añade Vue Router como plugin global
      }
    })

    // Verifica si el componente HomeView está presente
    expect(wrapper.findComponent(HomeView).exists()).toBe(true)
  })

  test('Probando la existencia de la vista AboutView', async () => {
    // Crea el enrutador y define la ruta para AboutView
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/about', // Ruta para AboutView
          name: 'AboutView',
          component: AboutView
        }
      ]
    })

    router.push('/about') // Empuja la ruta '/about'
    await router.isReady() // Espera a que el enrutador esté listo

    // Monta el componente AboutView con el enrutador configurado
    const wrapper = mount(AboutView, {
      global: {
        plugins: [router] // Añade Vue Router como plugin global
      }
    })

    // Verifica si el componente AboutView está presente
    expect(wrapper.findComponent(AboutView).exists()).toBe(true)
  })
})
