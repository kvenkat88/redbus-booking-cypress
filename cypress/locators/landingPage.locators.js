let LandingPageLocators = {
    redBus_logo: function(){
        return {
            locator: '.home-redirect.redbus-logo',
            textToVerify: 'redbus'
        }
    },

    from_search_dropdown: function(){
        return '#src'
    },

    to_search_dropdown: function(){
        return '#dest'
    },

    fetch_from_to_location_search_list_available: function(){
        return "#search ul[class='autoFill homeSearch'] > li"
    },

    onward_cal_select: function(){
        return "#onward_cal"
    },

    onward_cal_month_text_available: function(){
        return "#rb-calendar_onward_cal >table >tbody >tr[class='rb-monthHeader'] > td:nth-child(2)"
    },

    onward_cal_pick_available_days: function(){
        return "#rb-calendar_onward_cal >table >tbody >tr:not([class='rb-monthHeader']) >td:not([class='past day'],[class='empty day'])"
    },

    onward_cal_month_next_prev_button: function(month_cursor){
        // month_cursor accepted values are next,prev
        if (month_cursor == "prev"){
            // return "#rb-calendar_onward_cal >table >tbody >tr:first-child >td[class='prev'] >button"
            return "#rb-calendar_onward_cal >table >tbody >tr:first-child >td[class='prev'] >button"
        }

        if (month_cursor == "next"){
            return "#rb-calendar_onward_cal >table >tbody >tr:first-child >td[class='next'] >button"
        }
        
    },

    search_buses_button: function(){
        return {
            locator: '#search_btn',
            textToVerify: 'Search Buses'
        }
    }
}

export default LandingPageLocators