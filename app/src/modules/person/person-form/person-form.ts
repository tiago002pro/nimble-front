import { ModalCardController, templateModal } from "../../kanban/kanban-board/components/modal-card/modal-card";

class PersonFormController {
    private inputLabel: String
    private inputValue: String
    private label: String

    constructor (
        public $uibModal,
    ) {}

    $onInit() {
        this.label = 'Nome'
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