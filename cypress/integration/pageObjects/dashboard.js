class dash {

    admitbtn() {
        return cy.get('.btn__secondary')
    }
    autoselectmrn(){
        return cy.get('.suggestion')
    }
    mrn(){
        return cy.get('#mrn')
    }
    name(){
        return cy.get('strong')
    }
    hmo(){
        return cy.get(':nth-child(3) > .settings__form-group > .modal-select > .modal-select__control > .modal-select__value-container')
    }
    authorization(){
        return cy.get('#authorizationCode')
    }
    reasonforvisit(){
        return cy.get('#reason')
    
    }
    checkindate(){
        return cy.get(':nth-child(6) > .settings__form-group > .d-flex > .DayPickerInput > input')
    }
    dayselector(){
        return cy.get('div[aria-label*="Thu Jun 16 2022"]')
    }
    checkoutdate(){
        return cy.get(':nth-child(7) > .settings__form-group > .d-flex > .DayPickerInput > input')
    }
    ward(){
        return cy.get(':nth-child(8) > .settings__form-group > .modal-select > .modal-select__control > .modal-select__value-container')
    }
    room(){
        return cy.get(':nth-child(9) > .settings__form-group > .modal-select > .modal-select__control > .modal-select__value-container')
    }
    bedspace(){
        return cy.get(':nth-child(10) > .settings__form-group > .modal-select > .modal-select__control > .modal-select__value-container')
    }
    consultant(){
        return cy.get(':nth-child(11) > .settings__form-group > .modal-select > .modal-select__control > .modal-select__value-container')
    }
    admitpatientbtn(){
        return cy.get('.form__settings-button > .btn__secondary')
    }
    admitdashboard(){
        return cy.get(':nth-child(2) > .frontdesk__stat-card > .stat-section')
    }
    Tolu(){
        return cy.get('a[href*="/in-patient/patients/ajtolu1234?tab=admission"]')
    }

}

export default dash;