describe('Home component', () => {

    const checkHomeTitle = () => {
        const homeHeader = cy.get('[role=home-title]');
        homeHeader.should('be.visible');
        homeHeader.should('have.text', 'Birthdays');
    }

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('should navigate between home and details page', () => {
        checkHomeTitle();

        const userCard = cy.get('[role=card]').first().should('be.visible');
        userCard.click();
        cy.url().should('include', '/details');

        const button = cy.get('button');
        button.should('be.visible');
        button.should('have.text', 'Back to home');
        button.click();

        cy.url().should('not.include', '/details');
        checkHomeTitle();
    })
})