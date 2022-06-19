class inpatient{
    inpat(){
        return cy.get('[title="Patients"]')
    }
    searchbar(){
        return cy.get('.dashboard-search-bar__bar')
    }
    filterbtn(){
        return cy.get('.filter-action__title')
    }
    hmofilter(){
        return cy.get(':nth-child(1) > .settings__form-group > .modal-select > .modal-select__control > .modal-select__value-container')
    }
    genderfilter(){
        return cy.get(':nth-child(2) > .settings__form-group > .modal-select > .modal-select__control > .modal-select__indicators > .modal-select__indicator > .css-8mmkcg')
    }
    searchfilter(){
        return cy.get('.btn__secondary')
    }
    }

export default inpatient