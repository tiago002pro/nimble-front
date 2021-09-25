import './person-documents.scss'
import template from './person-documents.html'
import { isNullOrUndefined } from '@uirouter/angularjs'
import { Person } from '../../interfaces/person.interface'

class PersonDocumentController {
    private entity: Person
    private document: String
    private typePerson

    constructor() {}

    $onInit() {
        console.log("document", this.document);

        if (this.document.length == 14) {
            this.typePerson = 'pj'
        } else {
            this.typePerson = 'pf'
        }
    }
}

const personDocument = {
    bindings: {
        entity: '=',
        document: '=',
        typePerson: '=',
    },
    controller: PersonDocumentController,
    controllerAs: '$ctrl',
    templateUrl: template
}

PersonDocumentController['$inject'] = []

export { personDocument }