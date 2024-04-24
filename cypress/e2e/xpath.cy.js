const cypressConfig = require("../../cypress.config")

describe('Trabajar con xpaths', function() {
    it('Obtenerlo con xpath', function() {
        cy.visit('/')
        cy.xpath("//h1[contains(text(),'Bulbasaur')]").should('contain', 'Bulbasaur')

        cy.contains('Bulbasaur').should('be.visible')
    })
})