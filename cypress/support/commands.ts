/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
declare namespace Cypress {
  interface Chainable {
    searchByQuery(query: string): Chainable<void>
  }
}

Cypress.Commands.add('searchByQuery', (query: string) => {
  cy.visit('/')
  cy.get('input[name=product]').type(query).closest('form').submit()
})
