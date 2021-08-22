import './kanban.scss'
import { BoardService } from './services/board.service'

class KanbanBoardController { 
  private columns: any
  private cards:any

  
  constructor(
    public boardService: BoardService
  ) {}
  
  $onInit() {
    this.columns = [
      {id: 1, title: 'To Do', cards: [{title: 'A Fazer', description: 'AAAAAAAA'}, {title: 'A Fazer', description: 'AAAAAAAA'}]},
      {id: 2, title: 'In Progres', cards: [{title: 'Fazendo', description: 'AAAAAAAA'}, {title: 'Fazendo'}, {title: 'Fazendo', description: 'AAAAAAAA'}]},
      {id: 3, title: 'Done', cards: [{title: 'Terminados', description: 'AAAAAAAA'}, {title: 'Terminados', description: 'AAAAAAAA'}, {title: 'Terminados'}, {title: 'Terminados'}, {title: 'Terminados'}, {title: 'Terminados'}, {title: 'Terminados'}, {title: 'Terminados'}, {title: 'Terminados'}, {title: 'Terminados'}, {title: 'Terminados'}, {title: 'Terminados'}, {title: 'Terminados'}, ]},
      {id: 4, title: 'Test'},
      {id: 5, title: 'Test'},
      {id: 6, title: 'Test'},
      {id: 7, title: 'Test'},
      {id: 8, title: 'Test'},
      {id: 9, title: 'Test'},
      {id: 10, title: 'Test'},
    ]
    // this.columns = await this.boardService.getListCard().then((resp) => resp.data)
  }
}

KanbanBoardController['$inject'] = [
  'boardService'
]

export { KanbanBoardController }