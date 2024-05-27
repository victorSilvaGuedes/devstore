describe('search products', () => {
  it('should be able to search for products', () => {
    cy.searchByQuery('moletom')

    cy.location('pathname').should('include', 'search')

    cy.location('search').should('include', 'product=moletom')
  })

  it('should not be able to visit search page without a search query', () => {
    cy.on('uncaught:exception', () => {
      return false
    })

    cy.visit('/search')

    cy.location('pathname').should('equal', '/')
  })
})
