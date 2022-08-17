/// <reference types="cypress-iframe" />
import "cypress-iframe"
import LandingPage from '../page-objects/landing.page'

const landingPage=new LandingPage()

describe('Redbus Landing Page',{tags: ['@smoke','@regression']},() => {
    before(()=>{
        // cy.vist() is defined in support/commands.js file
        cy.launchURL('/')
        
    })

    it('Redbus - Search Buses without SignIn', () => {
        landingPage.redBus_logo_verification()
        landingPage.enter_from_location('Salem')
        landingPage.enter_dest_location('Chennai')
        landingPage.fetch_month_name_proceed_frwd_backward('Sept','18')
        landingPage.verify_date_selected_matches('18-Sep-2022')
        landingPage.search_buses_button_click()
    });

    it.skip('Redbus - Enter Phone No and Click on Capcha(residing inside nested iFrames)', () => {
        // cy.launchURL('/')
        cy.get('#select_box_sign').click().then(()=> {
            cy.get('ul #signInLink').click()
        
            cy.getIframeBody("div[class='modal'] iframe[class='modalIframe']").as('iframeA')
            cy.get('@iframeA').find('#mobileNoInp',{timeout:10000}).type("9894715549")
            
            cy.get('@iframeA').within(() =>{
                cy.getIframeBody("#recaptchaElement iframe[title='reCAPTCHA']").as('iframeB')
                cy.get('@iframeB').find('#recaptcha-anchor > div.recaptcha-checkbox-border').click({force: true})
                
            })
            cy.getIframeBody("div[class='modal'] iframe[class='modalIframe']").as('iframeA')
            cy.get('@iframeA').find('#otp-container').click({force: true})
        })
    })

});
