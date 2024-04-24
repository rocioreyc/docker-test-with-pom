const cypressConfig = require("../../cypress.config");
describe('Cookies', () => {
    beforeEach(() => {
        cy.session("Cookies",() => {
            cy.setCookie('nombre', 'Javier')
        })
    });
describe('Cookies', function() {
    it('Obtener cookies', function() {
        cy.clearAllCookies()
        cy.visit('/')
        cy.getCookies().should('be.empty')
    });
    it('Agregar cookies', function() {
        cy.setCookie('nombre', 'Javier')
        cy.getCookies().should('have.length', 1)
    });
    it('obtener cookie especifica', function() {
        cy.getCookie('nombre').should('have.a.property', 'value', 'Javier')
    });
});
});