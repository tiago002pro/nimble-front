import './person-data.scss'
import template from './person-data.html'
import { PersonEmail } from '../../interfaces/person.email.interface'
import { PersonPhone } from '../../interfaces/person.phone.interface'
import { Person } from '../../interfaces/person.interface'

class PersonDataController {
    private emails
    private phones
    private email: PersonEmail
    private phone: PersonPhone
    private person: Person
    constructor() {}

    $onInit() {
        this.email = {}
        this.phone = {}
        this.emails.push(this.email)
        this.phones.push(this.phone)
    }
}

const personData = {
    bindings: {
        emails: '=?',
        phones: '=?',
        person: '=?'
    },
    controller: PersonDataController,
    controllerAs: '$ctrl',
    templateUrl: template
}

PersonDataController['$inject'] = []

export { personData }