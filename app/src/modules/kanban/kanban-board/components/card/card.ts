import './card.scss'
import template from './card.html'

class CardController {
    private card: String
    
    constructor () {}

    $onInit() {
        
    }
}

const card = {
    bindings: {
        card: '=?'
    },
    controller: CardController,
    templateUrl: template
}

CardController['inject'] = []

export { card }

