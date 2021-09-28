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
        if (!isNullOrUndefined(this.entity.cnpj)) {
            this.document = this.entity.cnpj
        } else if (!isNullOrUndefined(this.entity.cpf)) {
            this.document = this.entity.cpf
        } else {
            this.document = null
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