describe('Products Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy="product"]').as('products')
        cy.get('[data-cy="search"]').as('search');
        cy.get('[data-cy="filter"]').as('filter');
        cy.get('[data-cy="addToCartButton').as('addToCartButton');
        cy.get('[data-cy="shoppingCartIcon"]').as('shoppingCartIcon')
    })

    it('Customer should be presented with a list of products on app load', () => {
        cy.get('@products').should('have.length.greaterThan', 10)
    })

    it('When a customer types in a search box some text, the product results should filter to display only items with a name or description matching that text.', () => {
        cy.get('@search').type('blue');
        cy.get('@filter').select('Name')
        cy.get('@products').should('have.length.lessThan', 10)
    })

    it('Customer should be able to add a product to their cart.', () => {
        cy.get('@shoppingCartIcon').contains(0);
        cy.get('@addToCartButton').first().contains('Add To Cart').click();
        cy.get('@shoppingCartIcon').contains(1)
    })

    it('Customer should be able to remove a product from their cart.', () => {
        cy.get('@shoppingCartIcon').contains(0);
        cy.get('@addToCartButton').first().contains('Add To Cart').click();
        cy.get('@shoppingCartIcon').contains(1)
        cy.get('[data-cy="removeFromCartButton"]').first().contains('Remove From Cart').click();
        cy.get('@shoppingCartIcon').contains(0);  
    })
})