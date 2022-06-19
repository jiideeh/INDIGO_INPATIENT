///<reference types="cypress"/>
import  logingpage from '../pageObjects/logingpage'
import  moduleselect from '../pageObjects/modules'
import  Higherhealthlekki from '../pageObjects/selectbranch'
import  cal from '../pageObjects/calendar'

describe('calendar functions', function()
{

    before(function () {

        cy.fixture('example').then(function(data)
        {
            this.data=data

        })
    })
    it('add shift',function(){
        const logingPage = new logingpage()
        const inPatient = new moduleselect()
        const HigherHealthlekki = new Higherhealthlekki()
        const Cal = new cal()
        cy.visit(Cypress.env('url'))
        logingPage.getemail().type(this.data.userid)
        logingPage.getPassword().type(this.data.password)
        logingPage.loginbtn().click()
        cy.wait(2000)
        HigherHealthlekki.getbranch().type(this.data.branchname)
        HigherHealthlekki.continue().click()
        inPatient.inpatient().click()
        Cal.calendarmenu().click()
        Cal.addshiftbtn().click()
        Cal.specialty().type(this.data.specialtytext)
        Cal.staff().type(this.data.shiftstaff)
        Cal.shiftdays().type(this.data.dayselection)
        Cal.frequency().type(this.data.everyweek)
        Cal.shiftstart().type(this.data.starttime)
        Cal.shiftend().type(this.data.endtime)
        Cal.savebtn().click()
        

       
       
        
        
       
       
       
        
        
        

        
        
       
        
        
        
        
        

       




    })
    
    
}

)