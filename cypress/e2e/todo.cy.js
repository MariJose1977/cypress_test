describe('Agregar tareas', () => {
    it('Agregar una tarea a la lista', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type('tarea1{enter}')
      cy.get('[data-testid="todo-item-label"]').contains('tarea1')
    })

    it('marcar tarea como completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('tarea2{enter}')
    cy.get('[data-testid="todo-item-label"]').contains('tarea2')
    cy.get('[data-testid="todo-item-toggle"]').first().check()
  })


  it('desmarcar tarea completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('tarea3{enter}')
    cy.get('[data-testid="todo-item-toggle"]').first().check()
    cy.get('[data-testid="todo-item-toggle"]').first().uncheck()
  })

  it('Editar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('tarea4{enter}')
    cy.get('[data-testid="todo-item-toggle"]').dblclick()
    cy.get('[data-testid="text-input"]').type('que pecha mas grande{enter}')
  })

  it('Borrar tarea', () => { 
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('tarea5{enter}')
    cy.get('[data-testid="todo-item-toggle"]').first().check()
    cy.get('.clear-completed').click()
  })

  it.only('Filtrar tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('Tarea 1{enter}')
    cy.get('[data-testid="text-input"]').type('Tarea 2{enter}')
    cy.get('[data-testid="text-input"]').type('Tarea 3{enter}')
    cy.get('[data-testid="text-input"]').type('Tarea 4{enter}')
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').first().check()
    cy.get(':nth-child(4) > .view > [data-testid="todo-item-toggle"]').first().check()
    cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').should('be.visible')
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').should('be.visible')
    cy.get(':nth-child(2) > a').click()
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').should('be.visible')
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').should('be.visible')
    cy.get(':nth-child(1) > a').click() 


   
    
  })
  

})

 





     




      
      

    

  



