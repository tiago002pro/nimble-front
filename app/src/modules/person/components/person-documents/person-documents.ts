import './person-documents.scss'
import template from './person-documents.html'
import { isNullOrUndefined } from '@uirouter/angularjs'

class PersonDocumentController {
    private person
    private pj: boolean
    private pf: boolean
    constructor() {}

    $onInit() {
        if (isNullOrUndefined(this.person.cpf)) {
            this.pj = true
        } else if (isNullOrUndefined(this.person.cnpj)) {
            this.pf = true
        } else {
            console.log("error");
            
        }
    }
}

const personDocument = {
    bindings: {
        person: '=',
    },
    controller: PersonDocumentController,
    controllerAs: '$ctrl',
    templateUrl: template
}

PersonDocumentController['$inject'] = []

export { personDocument }