class logingpage {
    getemail() {
       return cy.get('#email')
    }

    getPassword() {
        return cy.get('#password')
    }
    loginbtn() {
        return cy.get('.btn__secondary')
    }

}
export default logingpage;