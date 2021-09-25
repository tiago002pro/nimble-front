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
    private typePerson
    constructor() {}

    $onInit() {
    }
}

const personData = {
    bindings: {
        emails: '=?',
        phones: '=?',
        entity: '=?',
        typePerson: '=',
    },
    controller: PersonDataController,
    controllerAs: '$ctrl',
    templateUrl: template
}

PersonDataController['$inject'] = []

export { personData }