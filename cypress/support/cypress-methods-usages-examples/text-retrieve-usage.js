// https://blog.devgenius.io/how-to-validate-using-cypress-io-77c419a4b361
// https://glebbahmutov.com/blog/form-validation-in-cypress/
// https://www.linkedin.com/pulse/identifying-validating-text-based-elements-cypress-amarasiri-/


/* 
Get the element text available on the element directly and validate element text is matching
Example element - <a href="javascript:void(0)" class="home-redirect redbus-logo" xpath="1">redbus</a>
*/
cy.get('.home-redirect.redbus-logo').should('have.text',"redbus")

// TextArea field
cy.get('textarea').should('have.value', 'foo bar baz')

// assert the element's text includes the given substring
cy.get('#address').should('include.text','Atlanta')

// retry until this span does not contain 'click me'
cy.get('a').parent('span.help').should('not.contain', 'click me')

/* 
Get the element text available on the element using invoke() method.
Invoke method would use the jquery text method and return the promise and element text would be fetched for evaluation
Example element - <a href="javascript:void(0)" class="home-redirect redbus-logo" xpath="1">redbus</a>
*/
cy.get('.home-redirect.redbus-logo').invoke('text').then((test)=>{
    cy.log(text)
    //perform text validation here
})
/* 
Get the element text available on the element with promise return and access the text
Example element - <a href="javascript:void(0)" class="home-redirect redbus-logo" xpath="1">redbus</a>
*/
cy.get('.home-redirect.redbus-logo').then((text)=>{
    cy.log(text)
})

/* 
    - Get the text from list of element using find() and each method(for iteration)
    - each() would provide the promise and returns text for validation
    - consider <ul> - li elements 
*/
cy.get('.products').find('.product').each(($el,index,$list) => {
        const textVeg=$el.find('h4.product-name').text()
        // includes method for sub string validation
        if (textVeg.includes('Cashews')){
        // find() method is not allowed with click() method as per latest version of cypress.io beacuse $el releasing the promise
        cy.wrap($el).find('button').click()
    }
})

/*
    Check the element attribute is available
    <input class="form-control ng-dirty ng-valid ng-touched" minlength="2" name="name" required="" type="text">[1A238,.]
*/
cy.get(':nth-child(1) > .form-control').should('have.attr','minlength')

/*
    Get the element and element text using contains() method. contains() method would fetch the element based upon the element element text available.
    Example element - <a href="javascript:void(0)" class="home-redirect redbus-logo" xpath="1">redbus</a>
*/
cy.contains('redbus').should('have.text', 'redbus')

