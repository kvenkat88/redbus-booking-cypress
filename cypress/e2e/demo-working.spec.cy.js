/// <reference types="Cypress" />

describe("Cypress Demo KNowledge Learning Test Suite", ()=> {
    before(()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.fixture('example').then(function(data){
            this.data = data 
            // globalThis.data = data //if above peice of code is not working
            
            // homePage.getEditBox().type(globalThis.data.name)
        })

        //import signUpData from '../fixtures/example.json' // Another way of calling
        // cy.get('#user_full_name').type(signUpData.fullname)
    })

    it.skip("Validate radio button samples", ()=>{
        cy.get('#radio-btn-example label > input').each(($el,index, $list) => {
            cy.wrap($list).eq(index).invoke('val').then((text)=>{
                cy.log(text)
            })
            
    })

    cy.get('#radio-btn-example label > input').check(['radio1']).should('be.checked', 'radio1')

    })

    it.skip("Validate Checkbox func", ()=>{
        cy.get('#checkbox-example label > input').each(($el,index, $list) => {
            cy.wrap($list).eq(index).invoke('val').then((checkText) => {
                cy.log(checkText)
            })
        })
        cy.get('#checkbox-example label > input').check(['option1', 'option2']).should('be.checked', ['option1', 'option2'])

    })


    it.skip("Static Dropdown", ()=>{
        cy.get('#dropdown-class-example').select('option1').should('have.value', 'option1')
    })

    it.skip("Dynamic Dropdown", ()=>{
        cy.get('#autocomplete').type("Ind").wait(2000)
        cy.get("#ui-id-1 li > div").each(($el, index, $list) => {
            if ($el.text() === "India"){
                cy.wrap($el).click()
            }
        })
    })

    it.skip("Open new window by clicking button", ()=>{
        cy.window().then((win)=>{
            cy.stub(win,'open').as('windowOpen')
            cy.get('#openwindow').click()
            cy.get('@windowOpen').should('be.calledWith', 'http://www.qaclickacademy.com/')
        })
    })

    it.skip("Open New Tab", ()=>{
        // cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.get('#opentab').then((el)=>{
            const url = el.prop('href')
            cy.log(url)
            cy.visit(url)
        })
    })

    it.skip("Switch To Alert", ()=> {
        cy.get("input[id='name']").type("Venkatesh")
        cy.get('#alertbtn').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal(`Hello ${"Venkatesh"}, share this practice page and share your knowledge`)
        })
    })

    it.skip("Handle Confirm Popup/alert", ()=> {
        cy.get("input[id='name']").type("Venkatesh")
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal(`Hello ${"Venkatesh"}, Are you sure you want to confirm?`)
        })
    })

    it.skip("Prompt Dialogue box Validations", ()=>{
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('This is my answer')
            cy.get('#prompt-button').click()
            cy.get('#prompt-answer').contains('Answer: This is my answer.');
        })
    })

    
    it.skip("Mouse Hover Example", ()=>{
        cy.get('#mousehover').invoke('show')
        cy.get('.mouse-hover-content > a').each(($el,index,$list)=>{
            cy.log($el.text())

        })
    })

    it.skip("Cross Origin Validation(In case of login to 3rd party site for example", ()=>{
        cy.visit('https://www.google.com')

        cy.get('#sign-in').click()

        cy.origin('origin url', ()=>{
            cy.get('input[type="email"]').type('test@test.com');
            cy.get('input[type="password"]').type('testpassword', { log: false });
            // clicking submit does the auth and redirects back to main site
            cy.get('input[type="submit"]').click()
        })

        // once done testing can continue
	    cy.contains(`Welcome Tester McTester!`);
    })

    it.skip("Drag and Drop Validation", ()=>{
        cy.visit("https://www.w3schools.com/html/html5_draganddrop.asp")
        const dataTransfer = new dataTransfer()
        cy.get('#drag1').trigger('dragstart',{
            dataTransfer
        })
        cy.get('#div2').trigger('drop',{
            dataTransfer
        })
    })
    

})