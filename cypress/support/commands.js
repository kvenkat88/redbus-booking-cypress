// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import EnvURLGetter from "./envURLGetterUtil";
//Call getBaseUrl() to get environment specific url value
const url = new EnvURLGetter().getBaseUrl()

Cypress.Commands.add("launchURL", (subPath)=>{
    cy.visit(url+subPath,{ headers: { "Accept-Encoding": "gzip, deflate, br" } })
})

Cypress.Commands.add('checkRadioButtons',(selector,items_array) => {
    cy.get(selector).check(items_array).should('be.checked')
})

//Checks all the checkbox option available
Cypress.Commands.add('checkAllCheckBox',(selector)=>{
    cy.get(selector).check().should('be.checked')
})

//Unchecks all the checkbox option available
Cypress.Commands.add('uncheckAllCheckBox',(selector)=>{
    cy.get(selector).uncheck().should('not.be.checked')
})

// Check multiple items from the checkbox available
// items_array should be passed like ['a','b']
Cypress.Commands.add('selectCheckBoxItemsByDataProvided',(selector,items_array) => {
    cy.get(selector).check(items_array).should('be.checked')
})

// Uncheck multiple items from the checkbox available
// items_array should be passed like ['a','b']
Cypress.Commands.add('unselectCheckBoxItemsByDataProvided',(selector,items_array) => {
    cy.get(selector).uncheck(items_array).should('not.be.checked')
})

//Check whether element is visible
Cypress.Commands.add('checkElementVisible',(selector)=>{
    cy.get(selector).should('be.visible')
})

//Check whether element is not visible
Cypress.Commands.add('checkElementInVisible',(selector)=>{
    cy.get(selector).should('not.be.visible')
})

//Fetch and validate whether radiobutton/checkbox option texts are matching with expected ones.
let arrayItemsFetched = []
Cypress.Commands.add('validateArrayItemsMatch', (selector,array_to_be_validated)=>{
    cy.get(selector).each(($el,index,$list)=>{
        arrayItemsFetched.push($el.text().trim())
    }).then(()=> {
        cy.log(arrayItemsFetched)
        expect(arrayItemsFetched).to.deep.equal(array_to_be_validated)
    })
})


//https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/blogs__iframes

// Navigate to iFrame element document body and will load until the document is ready to view.
// This method is effective for single iframe available.
Cypress.Commands.add('getIframeBody', (selector) => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    cy.log('getIframeBody')
  
    return cy
        .get(selector, { log: false,timeout:10000 })
        .its('0.contentDocument.body', { log: false }).should('not.be.empty')
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        // https://on.cypress.io/wrap
        .then((body) => cy.wrap(body, { log: false }))
  })


  const isIframeLoaded = $iframe => {
    const contentWindow = $iframe.contentWindow;
  
    const src = $iframe.attributes.src;
    const href = contentWindow.location.href;
    if (contentWindow.document.readyState === 'complete') {
      return href !== 'about:blank' || src === 'about:blank' || src === '';
    }
  
    return false;
  };
  
  /**
   * Wait for iframe to load, and call callback
   *
   * Some hints taken and adapted from:
   * https://gitlab.com/kgroat/cypress-iframe/-/blob/master/src/index.ts
   */
  Cypress.Commands.add('iframe', { prevSubject: 'element' }, $iframes => new Cypress.Promise(resolve => {
    const loaded = [];
  
    $iframes.each((_, $iframe) => {
      loaded.push(
        new Promise(subResolve => {
          if (isIframeLoaded($iframe)) {
            subResolve($iframe.contentDocument.body);
          } else {
            Cypress.$($iframe).on('load.appearHere', () => {
              if (isIframeLoaded($iframe)) {
                subResolve($iframe.contentDocument.body);
                Cypress.$($iframe).off('load.appearHere');
              }
            });
          }
        })
      );
    });
  
    return Promise.all(loaded).then(resolve);
  }));

// Command to check whether checkbox is laready is selected or not and then check
// https://glebbahmutov.com/cypress-examples/6.4.0/recipes/conditional-testing.html#toggle-checkbox
Cypress.Commands.add('', (selector,value_to_check) => {
    cy.get(selector).each(($el,index,$list)  => {
        cy.log($el.attr('value'))
        cy.log($el.text().length)
        $el.invoke('is',':checked')
            .then((checked) => {
                cy.log(`checked checkbox: **${checked}**`)
                if (checked) {
                    cy.log("Checked")
                }
                else{
                    cy.log("Unchecked")
                }
        })
    })
})

