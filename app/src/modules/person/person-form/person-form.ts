import { isNullOrUndefined } from "@uirouter/core";
import { ModalCardController, templateModal } from "../../kanban/kanban-board/components/modal-card/modal-card";
import { PersonAddress } from "../interfaces/person.address.interface";
import { PersonEmail } from "../interfaces/person.email.interface";
import { Person } from "../interfaces/person.interface";
import { PersonService } from "../services/person.service";
import swal from 'sweetalert';


class PersonFormController {
    private inputLabel: String
    private inputValue: String
    private label: String
    private document: String

    constructor (
        public $scope,
        public rule,
        public $state,
        public personService: PersonService,
        private entity: Person
    ) {}

    $onInit() {
        if (isNullOrUndefined(this.entity)) {
            console.log("isnull");
            this.entity = {}
            this.entity.addresses = [{}]
            this.entity.emails = [{}]
            this.entity.phones = [{}]
            this.entity.documents = []
            this.entity.ruleList = [{}]
            
        } else {
            console.log("entity", this.entity);
        }
    }

    save() {
        console.log("doc", this.document);
        
        try {
            console.log("Save Person", this.entity);
            this.entity.ruleList = [{rule: this.rule}]
            this.personService.createIndividual(this.entity)
            swal({
                title: "Cadastro realizado com sucesso!",
                icon: "success",
              });
              history.back()
            
        } catch(e) {
            console.log("Error Save Person");
            
        }

    }

    back() {
        history.back()
    }

    personType(teste) {
        console.log("5", teste);
        
        if (this.document.length == 11) {
            console.log("CPF", this.document);
            this.entity.cpf = this.document
            
        } else {
            console.log("CNPJ", this.document);
            this.entity.cnpj = this.document

        }
        
    }
}

PersonFormController['$inject'] = [
    '$scope',
    'rule',
    '$state',
    'personService',
    'entity',
]

export { PersonFormController }