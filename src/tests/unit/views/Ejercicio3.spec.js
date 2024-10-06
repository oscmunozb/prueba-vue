import { mount } from '@vue/test-utils' // Importa la función 'mount' para montar los componentes en las pruebas unitarias
import ParentChildView from '@/views/ParentChildView.vue' // Importa el componente que contiene la comunicación entre Parent y Child

describe('Comunicación entre componentes Parent y Child en ParentChildView', () => {
  it('debería enviar el texto del componente Child al componente Parent al hacer clic en el botón', async () => {
    // Monta el componente ParentChildView
    const wrapper = mount(ParentChildView)

    // Verifica que el componente Child esté presente
    const childWrapper = wrapper.findComponent({ name: 'Child' }) // Busca el componente Child dentro del wrapper
    expect(childWrapper.exists()).toBe(true) // Asegura que el componente Child exista en el DOM

    // Simula la escritura en el input del Child
    const input = childWrapper.find('input') // Encuentra el campo input dentro del Child
    const mensaje = 'Ejercicio 3' // Define el mensaje que será enviado
    await input.setValue(mensaje) // Simula escribir el texto "Ejercicio 3" en el input

    // Simula el clic en el botón para emitir el texto
    const button = childWrapper.find('button') // Encuentra el botón dentro del Child
    await button.trigger('click') // Simula hacer clic en el botón para disparar el evento de envío del mensaje

    // Verifica que el componente Parent reciba y muestre el texto correctamente
    const parentWrapper = wrapper.findComponent({ name: 'Parent' }) // Busca el componente Parent dentro del wrapper
    expect(parentWrapper.exists()).toBe(true) // Asegura que el componente Parent exista en el DOM

    // Verifica que el texto enviado desde Child se muestre en Parent
    expect(parentWrapper.text()).toContain(mensaje) // Verifica que el texto "Ejercicio 3" se haya recibido y mostrado en el Parent
  })
})
