import './board.scss'
import template from './board.html'
import { ModalCardController, templateModal } from '../modal-card/modal-card'

class BoardController {
    private column:any
    private cards:any

    constructor (
        public $uibModal
    ) {
        
    }

    $onInit() {
        this.cards = this.column.cards
    }

    open() {
        console.log("OPEN");
        try {
            console.log("foi");
            
            const modalInstance = this.$uibModal.open({
                templateUrl: templateModal,
                controller: ModalCardController,
                controllerAs: '$ctrl',
                resolve: {}
              })
              return modalInstance.result
        } catch(e) {
            console.log("error", e);
            
            
        }

      }
}

const board = {
    bindings: {
        column: '=?'
    },
    controller: BoardController,
    templateUrl: template
}

BoardController['$inject'] = [
    '$uibModal'
]

export { board }