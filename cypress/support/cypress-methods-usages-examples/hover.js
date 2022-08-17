//Cypress does not have a cy.hover() command.

// Sometimes an element has specific logic on hover and you do need to "hover" in Cypress. Maybe the element doesn't even display to be clickable until you hover over another element.

// Oftentimes you can use .trigger(), .invoke() or cy.wrap() to show the element before you perform the action.

// https://docs.cypress.io/examples/examples/recipes#Testing-the-DOM

//If the hover behavior depends on a JavaScript event like mouseover, you can trigger the event to achieve that behavior.

cy.get('.menu-item').trigger('mouseover')
cy.get('.popover').should('be.visible')

//Example of showing an element in order to perform action
cy.get('.hidden').invoke('show').click()

cy.get('.hidden').click({ force: true })

