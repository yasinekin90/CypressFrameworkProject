//Launch browser open url=https://demo.nopcommerce.com/
//Enter text in search box "Apple Macbook Pro 13-inch"
//Click on search button
//Click on Add to cart
//Provide quantitiy 1
//Click on Add to cart
//Click on shopping cart link at the top of the page
//Verify total amount

/// <reference types="Cypress" />

/// <reference types="cypress-xpath" />



describe("Testing Add to cart function",()=>{
    it("Search provided product",()=>{

        //Launch browser open url=https://demo.nopcommerce.com/
     

        cy.visit("https://demo.nopcommerce.com/")
        //Enter text in search box "Apple Macbook Pro 13-inch"
        cy.get("#small-searchterms").type("Apple Macbook Pro 13-inch")
        //Click on search button
        cy.get("button[type='submit']").click()
        //Click on Add to cart
        cy.get('.product-box-add-to-cart-button').click()
        //Provide quantitiy 1
        cy.get("#product_enteredQuantity_4").clear().type("1")
      //Click on Add to cart
        cy.get("#add-to-cart-button-4").click()
        // when clicked to add to cart button The minimum quantity allowed for purchase is 2. should be displayed
        cy.get(".content").should("be.visible")
        //close the warning 
        cy.xpath("//span[@title='Close']").click()
         //Provide quantitiy 2
         cy.get("#product_enteredQuantity_4").clear().type("2")
         //Click on Add to cart
         cy.get("#add-to-cart-button-4").click()
         //Click on shopping cart link at the top of the page
         cy.get("span[title='Close']").click()

         cy.wait(5000)
         cy.get(".cart-label").click()
         //Verify total amount  $3,600.00
        
         cy.wait(3000)
         cy.get(".product-subtotal").contains("$3,600.00")  
        /* cy.get(".product-subtotal").then(function($elem) {
           var elementtextActual=$elem.text();
           var elementtextExpected="$3,600.00";
           assert.equal(elementtextActual,elementtextExpected)
           
       })*/












    })
})