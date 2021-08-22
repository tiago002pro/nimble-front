import './board.scss'
import template from './board.html'

class BoardController {

    constructor () {
    }

    $onInit() {
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