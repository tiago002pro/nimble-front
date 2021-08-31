import './card.scss'
import template from './card.html'
import templateModal from '../modal-card/modal-card.html'
import { ModalCardController } from '../modal-card/modal-card'
import { BoardService } from '../../services/board.service'

class CardController {
    private card: String
    
    constructor (
      private $scope,
      private boardService:BoardService

    ) {}

    $onInit() {
        
    }

    open() {
      this.boardService.openCardModal()
    }
}

const card = {
    bindings: {
        card: '=?'
    },
    controller: CardController,
    templateUrl: template
}

CardController['inject'] = [
  '$scope',
  'boardService'
]

export { card }

