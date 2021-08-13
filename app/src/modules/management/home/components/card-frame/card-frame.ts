import './card-frame.scss'
import template from './card-frame.html'

class CardFremeController {
    private card: String
    constructor () {}

    $onInit() {
        // console.log("titleeee", this.title);
        
    }
}

const cardFrame = {
    bindings: {
        card: '=?'
    },
    controller: CardFremeController,
    templateUrl: template
}

CardFremeController['inject'] = []

export { cardFrame }

