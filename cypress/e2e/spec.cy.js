describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    //Checking Home Page
    cy.get('#MainH1').should('contain', 'Find your next event')
    cy.get('#MainP').should('contain', 'Easily with Ticketoss')
    cy.get('#MainButton').should('contain', 'Get Started').click()
    //Checking Ticket Page
    cy.get('#search-bar').should('be.visible')
    cy.get('#AddTicket').should('be.visible').click({ force: true });
    //Add new ticket
    cy.get('input[name="name"]').type('Test Ticket')
    cy.get('input[name="description"]').type(' Test Description')
    cy.get('input[name="price"]').type('100')
    cy.get('input[name="eventDate"]').type('2021-12-12')
    cy.get('input[name="location"]').type('Mexico')
    cy.get('input[name="category"]').type('Music')
    cy.get('input[name="number"]').type('3')
    cy.get('#SubmitTicket').click()

    //Checking Login
    cy.get('#Login').click()
    cy.get('input[name="email"]').type('bm@mail.com')
    cy.get('input[name="password"]').type('12345678')
    cy.get('#SubmitLogin').click()


  })
})