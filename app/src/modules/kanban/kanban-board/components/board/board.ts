import './board.scss'
import template from './board.html'

class BoardController {
    private column:any
    private cards:any

    constructor () {
    }

    $onInit() {
        this.cards = this.column.cards
    }
}

const board = {
    bindings: {
        column: '=?'
    },
    controller: BoardController,
    templateUrl: template
}

BoardController['$inject'] = []

export { board }