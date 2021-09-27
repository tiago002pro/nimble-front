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
        console.log("this.entity.cpf", this.entity.cpf);
        console.log("this.entity.cnpj", this.entity.cnpj);

        if (!isNullOrUndefined(this.entity.cnpj)) {
            console.log("CNPJ");
            
            this.document = this.entity.cnpj
        } else if (!isNullOrUndefined(this.entity.cpf)) {
            console.log("CPF");

            this.document = this.entity.cpf
        } else {
            console.log("ELSE");

            this.document = null
        }
        
        console.log("documentTTTTTTTTTT", this.document);

        if (this.document.length == 14) {
            this.typePerson = 'pj'
            this.entity.cnpj = this.document
        } else {
            this.typePerson = 'pf'
            this.entity.cpf = this.document
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