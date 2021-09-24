import './person-documents.scss'
import template from './person-documents.html'
import { isNullOrUndefined } from '@uirouter/angularjs'
import { Person } from '../../interfaces/person.interface'

class PersonDocumentController {
    private entity: Person
    constructor() {}

    $onInit() {
        // console.log("entity2222222", this.entity);
        
    }
}

const personDocument = {
    bindings: {
        entity: '=',
    },
    controller: PersonDocumentController,
    controllerAs: '$ctrl',
    templateUrl: template
}

PersonDocumentController['$inject'] = []

export { personDocument }