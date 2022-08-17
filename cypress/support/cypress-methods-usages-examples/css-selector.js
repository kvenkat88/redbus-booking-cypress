/*
    https://devqa.io/selenium-css-selectors/
    https://www.w3schools.com/cssref/css_selectors.asp

    
*/

/* <input type="text" id="fistname" name="first_name" class="myForm fistnameName">

  CSS Select by ID -- '#fistname'


  CSS select by classname = '.myForm'
  CSS select by classname = '.myForm.fistnameName'
*/


/* <div class="ajax_enabled" style="display:block">
    Multiple Attributes - "div[class='ajax_enabled'][style='display:block']"
*/


/*
    <div class="day past calendar-day-2017-02-13 calendar-dow-1 unavailable">
    <div class="day today calendar-day-2017-02-14 calendar-dow-2 unavailable">
    <div class="day calendar-day-2017-02-15 calendar-dow-3">
    <div class="day calendar-day-2017-02-16 calendar-dow-4">

    - In the above snippet, we want to select an available day (i.e. the two last div elements)
    - As can be seen, all four divs contain “calendar-day-“ but the first two also contain “unavailable” which we don’t want.

    https://stuffandnonsense.co.uk/blog/using-multiple-not-selectors
    
    Locator - "div[class*=calendar-day-]:not([class*='unavailable'])", where class* represents regex for finding whether calendar-day is available
*/

/*
    Locating Child Element

    <div id="logo">
    <img src="./logo.png" />
    </div>

    Id - "div#logo img"
*/

/*
    Multiple Child Elements
    <ul id="fruit">
        <li>Apple</li>
        <li>Orange</li>
        <li>Banana</li>
    </ul>

    As can be seen, the individual list elements don’t have any id associated with them. To locate the element with text ‘Orange’, we have to use nth-of-type.

    driver.findElement(By.cssSelector("ul#fruit li:nth-of-type(2)"));

    Likewise, to select the last child element, i.e. ‘Banana’, we use:

    driver.findElement(By.cssSelector("ul#fruit li:last-child"));
*/

// Difference between :nth-child() and :nth-of-type()
// https://css-tricks.com/the-difference-between-nth-child-and-nth-of-type/

/*
    Attribute Starts with - driver.findElement(By.cssSelector("div[id^='123']"));
*/

/*
    Attribute Ends with - driver.findElement(By.cssSelector("div[id$='456']"));
*/

/*
    Attribute Contains::
    
    driver.findElement(By.cssSelector("div[id*='_pattern_']"));
    driver.findElement(By.cssSelector("div:contains('_pattern_')"));
*/

/*
    Direct Child 

    XPath: //div/a
    CSS: div > a

*/

/*
    Writing nested divs can get tiring - and result in code that is brittle. Sometimes you expect the code to change, or want to skip layers. If an element could be inside another or one of its children, 
    it’s defined in XPATH using “//” and in CSS just by a whitespace.

    XPath: //div//a
    CSS: div a
*/

/*
    Next Sibling - This is useful for navigating lists of elements, such as forms or ul items. The next sibling will tell selenium to find the next adjacent element on the page that’s inside the same parent. Let’s show an example using a form to select the field after username.
    
    <form class = "form-signin" role = "form" action = "/index.php" method = "post">
        <h4 class = "form-signin-heading"></h4> 
        <input type = "text" class = "form-control" id = "username" name = "username" placeholder = "username" required autofocus></br> 
        <input type = "password" class = "form-control" id = "password" name = "password" placeholder = "password" required> 
        <p> 
        <button class = "btn btn-lg btn-primary btn-block radius" type = "submit" name = "login">Login</button> 
    </form> 

    XPATH: //input[@id='username']/following-sibling:input[1]
    CSS: #username + input
*/