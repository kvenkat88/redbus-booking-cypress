// Iterate through an array like structure (arrays or objects with a length property).

// cy.get('ul>li').each(() => {...}) // Iterate through each 'li'
// cy.getCookies().each(() => {...}) // Iterate through each cookie

cy.get('ul>li').each(($el, index, $list) => {
    // $el is a wrapped jQuery element
    if ($el.someMethod() === 'something') {
      // wrap this element so we can
      // use cypress commands on it
      cy.wrap($el).click()
    } else {
      // do something else
    }
  })


  cy.get('li')
  .should('have.length', 3)
  .each(($li, index, $lis) => {
    return 'something else'
  })
  .then(($lis) => {
    expect($lis).to.have.length(3) // true
  })


  // .end() is useful when you want to end a chain of commands and force the next command to not receive what was yielded in the previous command.

  cy.contains('User: Cheryl')
  .click()
  .end() // yield null
  .contains('User: Charles')
  .click() // contains looks for content in document now

//   Alternatively, you can always start a new chain of commands off of cy.
cy.contains('User: Cheryl').click()
cy.contains('User: Charles').click()

// eq() - Get A DOM element at a specific index in an array of elements.
{/* <ul>
  <li>tabby</li>
  <li>siamese</li>
  <li>persian</li>
  <li>sphynx</li>
  <li>burmese</li>
</ul> */}

cy.get('li').eq(1).should('contain', 'siamese') // true

//Execute a system command.
cy.exec('npm run build')

cy.exec('npm run my-script')
  .its('stdout')
  .should('contain', 'Done running the script')

// filter
{/* <ul>
  <li>Home</li>
  <li class="active">About</li>
  <li>Services</li>
  <li>Pricing</li>
  <li>Contact</li>
</ul> */}

cy.get('ul').find('>li').filter('.active')
cy.get('li').filter(':contains("Services")').should('have.length', 2) // filter by text