import { ModalCardController, templateModal } from "../../kanban/kanban-board/components/modal-card/modal-card";
import { Person } from "../interfaces/person.interface";

class PersonFormController {
    private entity: Person
    private inputLabel: String
    private inputValue: String
    private label: String
    private address: any

    constructor (
        public $uibModal,
    ) {}

    $onInit() {

        this.entity = {}
        this.entity.name = "Tiago"
        console.log(this.entity);
        
        this.label = 'Nome'
        this.address = {zipCode: '87013-100', premisse: 'Rua Piratininga', number: '119', neighbourhood: 'Centro', location: 'Cidade', state: 'PR', coutruy: 'Brasil'}
    }

    open() {
        console.log("OPEN");
        try {
            console.log("foi");
            
            const modalInstance = this.$uibModal.open({
                templateUrl: templateModal,
                controller: ModalCardController,
                controllerAs: '$ctrl',
                animation: true,
                backdrop: 'static',
                size: 'md',
                resolve: {}
              })
              return modalInstance.result
        } catch(e) {
            console.log("error", e);
            
            
        }

      }
}

PersonFormController['$inject'] = [
    '$uibModal'
]

export { PersonFormController }