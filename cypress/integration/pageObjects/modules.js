class moduleselect {
    inpatient(){
        return cy.get(':nth-child(6) > a > .card > .details')
    }

}
export default moduleselect;