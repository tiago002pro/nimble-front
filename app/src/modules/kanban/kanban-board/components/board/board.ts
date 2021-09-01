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

    open(card) {
        const modalInstance = this.$uibModal.open({
            templateUrl: templateModal,
            controller: ModalCardController,
            controllerAs: '$ctrl',
            resolve: {
                card: () => card
            }
        })
        return modalInstance.result
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