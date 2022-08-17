// https://rahulshettyacademy.com/AutomationPractice/

// first() - Get the first DOM element within a set of DOM elements.
cy.get("#gf-BIG table tr td ul[css='1']").first()

/*
<ul>
  <li class="one">Knick knack on my thumb</li>
  <li class="two">Knick knack on my shoe</li>
  <li class="three">Knick knack on my knee</li>
  <li class="four">Knick knack on my door</li>
</ul>
*/

cy.get('li').first() // return first element
cy.get('li').last() // return last element

cy.get(':nth-child(1) > ul').children() // return all child elements i.e li 
cy.get(':nth-child(1) > ul').children("li")

//next() - Get the immediately following sibling of each DOM element within a set of DOM elements.

cy.get('#fruit option')
  .first()
  .should('have.text', 'Apple')
  .next()
  .should('have.text', 'Banana')
  .next()
  .should('have.text', 'Cantaloupe')

//parent() - Get the parent DOM element of a set of DOM elements.
cy.get('header').parent() // Yield parent el of `header`
cy.get('li.active').parent().should('have.class', 'nav')

//siblings() - Get sibling DOM elements

/*
<ul>
  <li>Home</li>
  <li>Contact</li>
  <li class="active">Services</li>
  <li>Price</li>
</ul>
*/
cy.get('td').siblings() // Yield all td's siblings
cy.get('li').siblings('.active') // Yield all li's siblings with class '.active'

// prev() - Get the immediately preceding sibling of each element in a set of the elements.
cy.get('.active').prev()
cy.get('li').prev('.active')
