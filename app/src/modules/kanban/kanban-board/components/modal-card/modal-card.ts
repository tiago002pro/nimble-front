import './modal-card.scss'
import templateModal from './modal-card.html'

class ModalCardController {
    constructor () {}

    $onInit() {
        
    }
}

const modalCard = {
    bindings: {
    },
    controller: ModalCardController,
    templateUrl: templateModal
}

ModalCardController['inject'] = []

export { ModalCardController, templateModal }

