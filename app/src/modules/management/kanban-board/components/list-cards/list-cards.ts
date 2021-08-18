import './list-cards.scss'
import template from './list-cards.html'
class ListCardsController {

    constructor () {
    }

    $onInit() {
    }
}

const listCards = {
    bindings: {
        column: '=?'

    },
    controller: ListCardsController,
    templateUrl: template
}

ListCardsController['$inject'] = []

export { listCards }