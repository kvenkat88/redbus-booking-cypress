// Focus on a DOM element.
cy.get('input').first().focus() // Focus on the first input
// yields the <textarea> for further chaining
cy.get('textarea').focus().type('Nice Product!').blur()

//Get the DOM element that is currently focused.
cy.focused() // Yields the element currently in focus
cy.focused().then(($el) => {
    // do something with $el
  })
  cy.focused().should('have.attr', 'name', 'username')