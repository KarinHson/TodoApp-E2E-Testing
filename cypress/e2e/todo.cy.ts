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

  it('is possible to add a todo', () => {
    //amount of todos from start
    cy.get('ul > li').should('have.length', 2)

    //write todo in input field
    cy.get('input#content').type('Skörda')

    //klickar på Lägg till
    cy.contains('button', 'Lägg till').click()

    //checking that lenght has increased
    cy.get('ul > li').should('have.length', 3)

    //checking that the new todo says "Skörda"
    cy.get('ul > li').last().find('h2').should('have.text', 'Skörda')
  })

  it('is possible to remove a todo when marked as done', () => {
    cy.get('ul > li').should('have.length', 2)
    cy.get('ul > li').first().find('input[type="checkbox"]').check()
    cy.get('ul > li').first().contains('button', 'Ta bort').click()
    cy.get('ul > li').should('have.length', 1)
  })

  it('does not allow deleting a todo that is not marked as done', () => {
    //starts with 2 todos
    cy.get('ul > li').should('have.length', 2)

    //checking that the remove button is disabled
    cy.get('ul > li').first().contains('button', 'Ta bort').should('be.disabled')

    //try to press the button anyway
    cy.get('ul > li').first().contains('button', 'Ta bort').click({ force: true})

    //make sure the length stays 2
    cy.get('ul > li').should('have.length', 2)
  })

  it('toggles a todo from not done to done and back', () => {
    //call the first todo 'firstTodo'
    cy.get('ul > li').first().as('firstTodo')
    
    //checking that is is not checked
    cy.get('@firstTodo').find("input[type='checkbox']").should('not.be.checked')

    //check if isDone is false by checking if it has the right CSS-class
    cy.get("@firstTodo").find("h2").should("not.have.class", "line-through")

    //mark as done
    cy.get("@firstTodo").find("input[type='checkbox']").click()

    //check to see if the checkbox is not checked
    cy.get("@firstTodo").find("input[type='checkbox']").should("be.checked")

    //check to see if the title now has the class line-through since isDone is true
    cy.get("@firstTodo").find("h2").should("have.class", "line-through")

    //mark as undone again
    cy.get("@firstTodo").find("input[type='checkbox']").click();

    //make sure the checkbox is back to not checked
    cy.get("@firstTodo").find("input[type='checkbox']").should("not.be.checked");
  })
})