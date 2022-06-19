///<reference types="cypress"/>
import  logingpage from '../pageObjects/logingpage'
import  moduleselect from '../pageObjects/modules'
import  Higherhealthlekki from '../pageObjects/selectbranch'
import  dash from '../pageObjects/dashboard'

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
        const Dash = new dash()
        
        cy.visit(Cypress.env('url'))
        logingPage.getemail().type(this.data.userid)
        logingPage.getPassword().type(this.data.password)
        logingPage.loginbtn().click()
        cy.wait(2000)
        HigherHealthlekki.getbranch().type(this.data.branchname)
        HigherHealthlekki.continue().click()
        inPatient.inpatient().click()
        Dash.admitdashboard().click()
        Dash.Tolu().click()
        

       
       
        
        
       
       
       
        
        
        

        
        
       
        
        
        
        
        

       




    })
    
    
}

)