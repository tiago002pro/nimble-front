import './modal-card.scss'
import template from './modal-card.html'

class ModalCardController {
    constructor () {}

    $onInit() {
        
    }
}

const modalCard = {
    bindings: {
    },
    controller: ModalCardController,
    templateUrl: template
}

ModalCardController['inject'] = []

export { modalCard }

