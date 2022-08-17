cy.get('.err').should('be.empty').and('be.hidden') // Assert '.err' is empty & hidden

cy.contains('redbus').and('be.visible') //check that redbus text in element is available 

cy.wrap({ foo: 'bar' })
  .should('have.property', 'foo') // Assert 'foo' property exists
  .and('eq', 'bar') // Assert 'foo' property is 'bar'

  cy.get('nav') // yields <nav>
    .should('be.visible') // yields <nav>
    .and('have.css', 'font-family') // yields 'sans-serif'
    .and('match', /serif/) // yields 'sans-serif'

    // Chainers Validation
/*
    <ul>
        <li>
        <a href="users/123/edit">Edit User</a>
        </li>
    </ul>
*/
cy.get('a')
  .should('contain', 'Edit User') // yields <a>
  .and('have.attr', 'href') // yields string value of href
  .and('match', /users/) // yields string value of href
  .and('not.include', '#') // yields string value of href

  cy.get('p')
  .should('not.be.empty')
  .and(($p) => {
    // should have found 3 elements
    expect($p).to.have.length(3)

    // make sure the first contains some text content
    expect($p.first()).to.contain('Hello World')

    // use jquery's map to grab all of their classes
    // jquery's map returns a new jquery object
    const classes = $p.map((i, el) => {
      return Cypress.$(el).attr('class')
    })

    // call classes.get() to make this a plain array
    expect(classes.get()).to.deep.eq([
      'text-primary',
      'text-danger',
      'text-default',
    ])
  })

  
