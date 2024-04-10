describe('Agregar tareas', () => {
    it('Agregar una tarea a la lista', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('.new-todo').type('Tarea 1')
      cy.get('[data-testid="text-input"]').log('Tarea 1')
     })
  })
  



