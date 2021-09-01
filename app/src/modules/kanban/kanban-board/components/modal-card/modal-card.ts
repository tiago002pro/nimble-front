import './modal-card.scss'
import templateModal from './modal-card.html'

class ModalCardController {
    constructor (
        public card,
    ) {}

    $onInit() {
        console.log("Modal");
        
    }
}

const modalCard = {
    bindings: {
    },
    controller: ModalCardController,
    templateUrl: templateModal
}

ModalCardController['inject'] = [
    'card'
]

export { ModalCardController, templateModal }

