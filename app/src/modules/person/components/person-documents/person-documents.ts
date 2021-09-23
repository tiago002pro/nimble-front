import './person-documents.scss'
import template from './person-documents.html'
import { isNullOrUndefined } from '@uirouter/angularjs'

class PersonDocumentController {
    private person
    private pj: boolean
    private pf: boolean
    constructor() {}

    $onInit() {
        this.pf = true
        
        // if (isNullOrUndefined(this.person.cpf)) {
        //     this.pj = true
        //     console.log("pj");
            
        // } else if (isNullOrUndefined(this.person.cnpj)) {
        //     this.pf = true
        //     console.log("pf");

        // } else {
        //     console.log("error");
            
        // }
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