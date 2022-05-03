/// <reference types="cypress"/>

describe('Access', () => {
    beforeEach(() =>{
        cy.visit('https://jsonplaceholder.typicode.com/')
    })

    it('Access photos link' , ()=>{
        cy.get('a:contains(photos)').should('be.visible').click()
        cy.contains(' "id": 4,')  
        cy.contains(' "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",')
        cy.contains(' "url": "https://via.placeholder.com/600/d32776", ')   
        cy.contains(' "thumbnailUrl": "https://via.placeholder.com/150/d32776" ')
    })

})