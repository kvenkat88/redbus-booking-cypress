//syntax
/*
.click()
.click(options)
.click(position)
.click(position, options)
.click(x, y)
.click(x, y, options)
*/

// https://github.com/cypress-io/cypress-example-kitchensink/blob/master/cypress/e2e/2-advanced-examples/actions.cy.js
// https://www.cypress.io/blog/2019/01/22/when-can-the-test-click/


cy.get('.btn').click() // Click on button
cy.focused().click() // Click on el with focus
cy.contains('Welcome').click() // Click on first el containing 'Welcome'

//The position where the click should be issued. The center position is the default position.
// Valid positions are topLeft, top, topRight, left, center, right, bottomLeft, bottom, and bottomRight.
cy.get('img').click('topRight')
cy.get('#top-banner').click(15, 40)
cy.get('#collapse-sidebar').click('bottomLeft', { force: true })

cy.get('button').dblclick({ force: true })
cy.get('#open-menu').rightclick()

