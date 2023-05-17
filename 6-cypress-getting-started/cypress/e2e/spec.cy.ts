describe('My first test', () => {
  it('gets, types and asserts', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();

    cy.url().should('include', '/commands/actions');

    cy.get('.action-email').type('fake@email.com');
    cy.get('.action-email').should('have.value', 'fake@email.com');
  });
});

describe('Using Cypress Testing Library', () => {
  it('finds, types, and asserts', () => {
    cy.visit('https://example.cypress.io');
    cy.findAllByRole('link', { name: 'focus' }).click();

    // focus password textarea
    cy.findByPlaceholderText(/password/i).focus();

    // then label text color should be orange
    cy.findByText('Password').should('have.css', 'color', 'rgb(255, 165, 0)');
  });
});
