/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach (() => {
    cy.visit('http://localhost:5174/')
  })


  it('makes sure there are two todos by default', () => {
    cy.get('ul > li').should('have.length', 2)
    cy.get('h2').first().should('have.text', 'Så plantor')
    cy.get('h2').last().should('have.text', 'Rensa ogräs')

  })

  it('one todo is done and one is not', () => {
    cy.get('ul > li').first().find('input[type="checkbox"]').should('not.be.checked')
    cy.get('ul > li').last().find('input[type="checkbox"]').should('be.checked')
  })
})