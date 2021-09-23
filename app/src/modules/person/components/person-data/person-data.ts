import './person-data.scss'
import template from './person-data.html'
import { PersonEmail } from '../../interfaces/person.email.interface'
import { PersonPhone } from '../../interfaces/person.phone.interface'
import { Person } from '../../interfaces/person.interface'
import { isNullOrUndefined } from '@uirouter/core'

class PersonDataController {
    private emails
    private phones
    private email: PersonEmail
    private phone: PersonPhone
    private entity
    constructor() {}

    $onInit() {
        if (isNullOrUndefined(this.entity)) {
            console.log("vixi");
            
            this.email = {}
            this.phone = {}
            this.emails.push(this.email)
            this.phones.push(this.phone)
        } else {
            
            
        }
    }
}

const personData = {
    bindings: {
        emails: '=?',
        phones: '=?',
        entity: '=?',
    },
    controller: PersonDataController,
    controllerAs: '$ctrl',
    templateUrl: template
}

PersonDataController['$inject'] = []

export { personData }