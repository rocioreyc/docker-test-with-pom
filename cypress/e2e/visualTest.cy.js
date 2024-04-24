describe('Visual testing', function() {
    it('Comparisson between snapshots for visual checks', function() {
        cy.visit('/');
        cy.matchImageSnapshot();
    });
});