describe('Tipos de Localizadores', ()=>{

    it('Obtener por medio de una tag', ()=>{
        cy.visit('/automation-practice-form')
        cy.get('input')
    })

    it('Obtener por medio de una atributo y tag', ()=>{
        cy.visit('/automation-practice-form')
        cy.get('input[placeholder="First Name"]')
    })
    
    
    it('Obtener por medio de un id', ()=>{
        cy.visit('/automation-practice-form')
        cy.get('#lastName')
    })

    it('Obtener por medio de un clase', ()=>{
        cy.visit('/automation-practice-form')
        cy.get('.mr-sm-2.form-control')
    })

    it('Obtener por contains', ()=>{
        cy.visit('/automation-practice-form')
        cy.contains('Reading')
        cy.contains('.header-wrapper', 'Widgets')
    })

    it('Obtener por medio parent', ()=>{
        cy.visit('/automation-practice-form')
        cy.get('input[placeholder="First Name"]').parent() //obtener un solo padre
        cy.get('input[placeholder="First Name"]').parents() //obtener todos los dependientes de este
        cy.get('input[placeholder="First Name"]').parents().find('label') //obtener todos los label de ese parent
        cy.get('form').find('label') //también busca los label dentro del formulario
    })
}
)