import './person-data.scss'
import template from './person-data.html'
import { PersonEmail } from '../../interfaces/person.email.interface'
import { PersonPhone } from '../../interfaces/person.phone.interface'
import { Person } from '../../interfaces/person.interface'
import { isNullOrUndefined } from '@uirouter/core'

class PersonDataController {
    private emails: Array<PersonEmail>
    private phones: Array<PersonPhone>
    private entity: Person
    constructor() {}

    $onInit() {
        console.log("11", this.entity);
        console.log("email", this.emails);
        console.log("phones", this.phones);
        

        // this.entity.emails = this.emails
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