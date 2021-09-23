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
    private person: Person
    private entity: Person
    constructor() {}

    $onInit() {
        console.log("aaaaaa", this.person);

        if (isNullOrUndefined(this.person)) {
            console.log("vixi");
            
            this.email = {}
            this.phone = {}
            this.emails.push(this.email)
            this.phones.push(this.phone)
        } else {
            console.log("aaaa", this.entity);
            console.log("aaaaaa", this.person);
            
            
        }
    }
}

const personData = {
    bindings: {
        emails: '=?',
        phones: '=?',
        entity: '=?',
        person: '=?',
    },
    controller: PersonDataController,
    controllerAs: '$ctrl',
    templateUrl: template
}

PersonDataController['$inject'] = []

export { personData }