import { ModalCardController, templateModal } from './components/modal-card/modal-card'
import './kanban.scss'
import { BoardService } from './services/board.service'

class KanbanBoardController { 
  private columns: any
  private cards:any

  
  constructor(
    public boardService: BoardService,
    public $uibModal
  ) {}
  
  $onInit() {
    this.columns = [
      {id: 1, title: 'To Do', cards: [{title: 'A Fazer A Fazer A Fazer A Fazer A Fazer A Fazer A Fazer A Fazer', description: 'AAAAAAAA', status: 'red'}, {title: 'A Fazer', description: 'AAAAAAAA', status: 'blue'}]},
      {id: 2, title: 'In Progres', cards: [{}]},
      {id: 3, title: 'Done', cards: [{title: 'Terminados', description: 'AAAAAAAA', status: 'red'}, {title: 'Terminados5', description: 'AAAAAAAA', status: 'green'}, {title: 'Terminados'}, {title: 'Terminados', description: 'AAAAAAAA',}, {title: 'Terminados'}, {title: 'Terminados', description: 'AAAAAAAA',}, {title: 'Terminados5'}, {title: 'Terminados'}, {title: 'Terminados'}, {title: 'Terminados'}, {title: 'Terminados5'}, {title: 'Terminados'}, {title: 'Terminados'}, ]},
      {id: 4, title: 'Test', cards: [{}]}
    ]
    // this.columns = await this.boardService.getListCard().then((resp) => resp.data)
  }

  newList() {
    this.columns.push({id: 4, title: 'Teste', cards: [{}]})
  }


}

KanbanBoardController['$inject'] = [
  'boardService',
  '$uibModal'
]

export { KanbanBoardController }