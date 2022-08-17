//Syntax

//https://glebbahmutov.com/cypress-examples/6.4.0/recipes/conditional-testing.html#toggle-checkbox
// https://www.tutorialspoint.com/checkbox-verification-with-cypress#:~:text=Cypress%20handles%20checking%20and%20unchecking,html%20code%20should%20be%20checkbox.&text=check()%20%E2%88%92%20The%20check(),argument%20checks%20all%20the%20checkboxes.
// https://stackoverflow.com/questions/69696201/how-can-you-check-whether-a-checkbox-is-in-the-indeterminate-state-neither-chec


// .check()
// .check(value)
// .check(values)
// .check(options)
// .check(value, options)
// .check(values, options)


cy.get('[type="checkbox"]').check() // Check checkbox element
cy.get('[type="radio"]').first().check() // Check first radio element


//Check an invisible checkbox

cy.get('.action-checkboxes')
  .should('not.be.visible') // Passes
  .check({ force: true })
  .should('be.checked') // Passes

// Validation of checkbox is checked
  it("Amazon checkbox cehck", ()=>{
    cy.visit('https://www.amazon.in',{ headers: { "Accept-Encoding": "gzip, deflate, br" } })
    cy.get('#twotabsearchtextbox').type('laptop {enter}')
    cy.wait(5000)
    cy.get("li[id='p_89/ASUS'] a div label input").click({force:true})
    cy.get("li[id='p_89/ASUS'] a div label input").should('have.attr', 'checked')
    cy.get("li[id='p_89/ASUS'] a div label input").click({force:true})
})

cy.get('.action-select-multiple')
.select(['apples', 'oranges', 'bananas'])
// when getting multiple values, invoke "val" method first
.invoke('val')
.should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])

// Validation
let optionsArray = []
cy.get('#checkbox-example label').each(($el,index,$list) => {
    optionsArray.push($el.text().trim())
}).then(()=> {
    cy.log(optionsArray)
    expect(optionsArray).to.deep.equal(['Option1','Option2','Option3'])
})