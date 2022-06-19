class cal {
    calendarmenu() {
        return cy.get('[title="Calendar"]')
    }
    nextweek(){
        return cy.get('.content-table > .mb-4 > .row > .col-md-6 > .calendar-controls > :nth-child(3)')
    }
    prevweek(){
        return cy.get('.content-table > .mb-4 > .row > .col-md-6 > .calendar-controls > :nth-child(3)')
    }
    searchbar(){
        return cy.get('.dashboard-search-bar__bar')
    }
    addshiftbtn(){
        return cy.get('.dashboard-header > .btn')
    }
    specialty(){
        return cy.get('.false > .modal-select > .modal-select__control > .modal-select__value-container')
    }
    staff(){
        return cy.get(':nth-child(2) > .modal-select > .modal-select__control > .modal-select__value-container')
    }
    shiftdays(){
        return cy.get(':nth-child(3) > .modal-select > .modal-select__control > .modal-select__value-container')
    }
frequency(){
return cy.get('.col-md-3 > .settings__form-group > .modal-select > .modal-select__control > .modal-select__value-container')
}

shiftstart(){
    return cy.get('.flex-column > .flex-gap-2 > :nth-child(1) > .settings__form-group > .modal-select > .modal-select__control > .modal-select__value-container')
}
shiftend(){
    return cy.get(':nth-child(2) > .settings__form-group > .modal-select > .modal-select__control > .modal-select__value-container')
}
savebtn(){
    return cy.get('.form__settings-button > .btn__secondary')
}
}
export default cal;