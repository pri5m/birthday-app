describe('Home component', () => {
    it('should get page', () => {
        cy.visit('http://localhost:3000');
        cy.get('[role=home-title]').should('be.visible')
    })
})