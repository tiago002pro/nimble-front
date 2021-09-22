import { isNullOrUndefined } from "@uirouter/core";
import { ModalCardController, templateModal } from "../../kanban/kanban-board/components/modal-card/modal-card";
import { PersonAddress } from "../interfaces/person.address.interface";
import { PersonEmail } from "../interfaces/person.email.interface";
import { Person } from "../interfaces/person.interface";
import { PersonService } from "../services/person.service";

class PersonFormController {
    private entity: Person
    private inputLabel: String
    private inputValue: String
    private label: String

    constructor (
        public $scope,
        public rule,
        public person: Person,
        public $state,
        public personService: PersonService
    ) {}

    $onInit() {
        console.log("person", this.person);
        this.entity = {}
        this.entity.addresses = []
        this.entity.emails = []
        this.entity.phones = []
        this.entity.documents = []

        if(!isNullOrUndefined(this.person)) {
            this.entity = this.person
        }

        console.log("person", this.person);
        console.log("entity", this.entity);

        
    }

    save() {
        console.log("Save Person", this.entity);
        this.personService.createIndividual(this.entity)
        
    }
}

PersonFormController['$inject'] = [
    '$scope',
    'rule',
    'person',
    '$state',
    'personService',
]

export { PersonFormController }