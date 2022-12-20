describe('Navegacion', () => {

    it('Navegar a platzi', () => {
        cy.visit('https://platzi.com/')
    })

    //Recargar página
    it('Recargar página', () => {
        cy.reload()
    })

    //Recargar página forzadamente sin usar caché
    it('force reload', () => {
        cy.visit("https://www.google.com/")
        cy.reload(true)
    })

    //Navegar hacia atrás "con el only, se corre solo esa prueba"
    it('navegar hacia atras', () => {
        cy.visit("https://www.google.com/")
        cy.visit("https://www.google.com/search?q=platzi&sxsrf=ALiCzsYyv0p7PpBGt6iaGy7fB9uIlp4kWQ%3A1671572293842&source=hp&ei=RSuiY8WhMaC8kPIPp7qeqAU&iflsig=AJiK0e8AAAAAY6I5VT-KqFcIkLKkjF_zhy6ip7j-yKXs&ved=0ahUKEwiF2KeGlIn8AhUgHkQIHSedB1UQ4dUDCAg&uact=5&oq=platzi&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyEAguELEDEIMBEMcBENEDEEMyBAgAEEMyBwgAELEDEEMyBQgAEIAEMgQIABBDMgUIABCABDIFCAAQgAQyBAgAEEM6CwgAEIAEELEDEIMBOggIABCABBCxAzoNCC4QsQMQxwEQ0QMQQzoECC4QQzoKCAAQsQMQgwEQQzoKCC4QsQMQ1AIQQ1AAWO0HYKgLaABwAHgAgAGjAogB5QiSAQUwLjUuMZgBAKABAQ&sclient=gws-wiz")
        //cy.go('back') //se puede hacer de esta forma
        cy.go(-1) //o de esta forma
    })

    it('navegar hacia adelante', () => {
        cy.visit("https://www.google.com/")
        cy.visit("https://www.google.com/search?q=platzi&sxsrf=ALiCzsYyv0p7PpBGt6iaGy7fB9uIlp4kWQ%3A1671572293842&source=hp&ei=RSuiY8WhMaC8kPIPp7qeqAU&iflsig=AJiK0e8AAAAAY6I5VT-KqFcIkLKkjF_zhy6ip7j-yKXs&ved=0ahUKEwiF2KeGlIn8AhUgHkQIHSedB1UQ4dUDCAg&uact=5&oq=platzi&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyEAguELEDEIMBEMcBENEDEEMyBAgAEEMyBwgAELEDEEMyBQgAEIAEMgQIABBDMgUIABCABDIFCAAQgAQyBAgAEEM6CwgAEIAEELEDEIMBOggIABCABBCxAzoNCC4QsQMQxwEQ0QMQQzoECC4QQzoKCAAQsQMQgwEQQzoKCC4QsQMQ1AIQQ1AAWO0HYKgLaABwAHgAgAGjAogB5QiSAQUwLjUuMZgBAKABAQ&sclient=gws-wiz")
        //cy.go('back') //se puede hacer de esta forma
        cy.go(-1) //o de esta forma
        cy.go('forward')
    })
}
)