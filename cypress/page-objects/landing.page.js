/// <reference types="Cypress" />

import LandingPageLocators from '../locators/landingPage.locators'

class LandingPage{

    // constructor(){
    //     this.checkOutButtonLocator = '#navbarResponsive > .navbar-nav > .nav-item > .nav-link'
    // }

    // cy.get('.home-redirect.redbus-logo').should('have.text','redbus')

    // Getting the text(text property) of the element using jQuery method
    // cy.get('.home-redirect.redbus-logo').invoke('text').then((text) => {
    //     cy.log(text)
    // })

    // using contains() method
    // cy.contains('redbus').should('have.text', 'redbus')

    redBus_logo_verification(){
        const fecthed_det = LandingPageLocators.redBus_logo()
        cy.get(fecthed_det.locator).should('have.text',fecthed_det.textToVerify)
    }

    fetch_search_from_to_retrieval_list(loc_name){
        cy.get(LandingPageLocators.fetch_from_to_location_search_list_available()).should('have.length.at.least',2).each(($el,index,$list) => {
            cy.log($list[index].innerText)
            if ($list[index].innerText === loc_name.trim()){
                $list[index].click({force:true})
                //https://glebbahmutov.com/cypress-examples/6.3.0/recipes/each-example.html#stop-cy-each-iteration
                 // stop iteration
                return false
            }
        })
    }

    enter_from_location(loc_name){
        cy.get(LandingPageLocators.from_search_dropdown()).type(loc_name.trim())
        this.fetch_search_from_to_retrieval_list(loc_name)
    }

    enter_dest_location(loc_name){
        cy.get(LandingPageLocators.to_search_dropdown()).type(loc_name.trim())
        this.fetch_search_from_to_retrieval_list(loc_name)
    }

    enter_journey_date(){
        cy.get(LandingPageLocators.onward_cal_select()).click()
    }
    
    // https://bobbyhadz.com/blog/javascript-get-object-key-by-value
    getObjKey(obj, value) {
        return Object.keys(obj).find(key => obj[key] === value);
      }

    fetch_month_name_proceed_frwd_backward(month_short_name,date){
        // click clander object
        this.enter_journey_date()
        
        const dateMonthObject = {0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"July",7:"Aug",8:"Sept",
                                9:"Oct",10:"Nov",11:"Dec"}
        const today = new Date()
        // const fetched_month_short_name = today.toLocaleString('default', { month: 'short' })
        const fetched_current_year = today.getFullYear()

        cy.get(LandingPageLocators.onward_cal_month_text_available()).then((fetched_month_title) =>{
            if (fetched_month_title.text().trim() === `${month_short_name} ${fetched_current_year}`){    
                cy.log(`Month name - ${month_short_name} ${fetched_current_year} is available`)
                cy.get(LandingPageLocators.onward_cal_pick_available_days()).then(($list) => {
                    cy.log(`Total Length of the fetch days list available is ${$list.length}`)
                    if ($list.length !== 0) {
                        cy.log("Date Length not equal to zero")
                        cy.get(LandingPageLocators.onward_cal_pick_available_days()).each(($el,index,$listfetched)=>{
                            // cy.log(typeof $listfetched[index].innerText.trim(),parseInt(date))
                            if ($listfetched[index].innerText.trim() === date){
                                cy.log(`Selectec date is ${$listfetched[index].innerText.trim()}`)
                                $listfetched[index].click({force:true})
                                return false //break out of loop in cypress
                            }
                        })
                    }
                    else{
                        // LandingPageLocators.onward_cal_month_next_prev_button('next')
                        cy.get(LandingPageLocators.onward_cal_pick_available_days()).should('have.length.at.least',1)
                    }
                })
            }
            else{
                cy.log(`Future Month Logics - Month name - ${month_short_name} ${fetched_current_year} is available`)
                var fetchMonthNo = this.getObjKey(dateMonthObject,month_short_name)

                // https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-33.php

                if (fetchMonthNo > today.getMonth()){
                    let monthNoDiff = fetchMonthNo - today.getMonth()
                    cy.log(`Month difference count is ${monthNoDiff}`)
                    cy.log(`Month No is ${today.getMonth()+(fetchMonthNo - today.getMonth())}`)
                    for (let i=1;i<=monthNoDiff;i++){
                        cy.log(`Clicking ${i} st/nd/rd/th time`)
                        cy.get(LandingPageLocators.onward_cal_month_next_prev_button('next')).click({force:true})
                    }
                    cy.get(LandingPageLocators.onward_cal_pick_available_days()).each(($el,index,$listfetched)=>{
                        // cy.log(typeof $listfetched[index].innerText.trim(),parseInt(date))
                        if ($listfetched[index].innerText.trim() === date){
                            cy.log(`Date selected is ${$listfetched[index].innerText}`)
                            $listfetched[index].click({force:true})
                            return false //break out of loop in cypress
                        }
                    })

                }
                
                else if (this.getObjKey(dateMonthObject,fetched_month_title.text().trim().split(" ")[0]) > today.getMonth()){
                    let monthNoDiff = parseInt(this.getObjKey(dateMonthObject,fetched_month_title.text().trim().split(" ")[0]) - today.getMonth())
                    cy.log(`Month difference count is ${monthNoDiff}`)

                    for (let i=1;i<=monthNoDiff;i++){
                        cy.log(`Clicking ${i} st/nd/rd/th time`)
                        cy.get(LandingPageLocators.onward_cal_month_next_prev_button('prev')).click({force:true})
                    }
                    cy.get(LandingPageLocators.onward_cal_pick_available_days()).each(($el,index,$listfetched)=>{
                        // cy.log(typeof $listfetched[index].innerText.trim(),parseInt(date))
                        if ($listfetched[index].innerText.trim() === date){
                            cy.log(`Date selected is ${$listfetched[index].innerText}`)
                            $listfetched[index].click({force:true})
                            return false //break out of loop in cypress
                        }
                    })

                }
                else{
                    throw new Error("Unable to process the logics for date seletcion")
                }
            }
        })
    }

    verify_date_selected_matches(date_obj){
        cy.get(LandingPageLocators.onward_cal_select()).should('have.attr','data-caleng',date_obj)
    }

    search_buses_button_click(){
        const fecthed_det = LandingPageLocators.search_buses_button()
        cy.get(fecthed_det.locator).should('have.text',fecthed_det.textToVerify).click()
    }

}

export default LandingPage;