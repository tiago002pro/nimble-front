import './kanban-board.scss'

class KanbanBoardController { 
  private columns: any
  
  constructor() {}
  
  $onInit() {
    this.columns = [
      {id: 1, title: 'To Do', card: [{titleCard: 'A Fazer'}, {titleCard: 'A Fazer'}]},
      {id: 2, title: 'In Progres', card: [{titleCard: 'Fazendo'}, {titleCard: 'Fazendo'}, {titleCard: 'Fazendo'}]},
      {id: 3, title: 'Done', card: [{titleCard: 'Terminados'}, {titleCard: 'Terminados'}, {titleCard: 'Terminados'}, {titleCard: 'Terminados'}, {titleCard: 'Terminados'}, {titleCard: 'Terminados'}, {titleCard: 'Terminados'}, {titleCard: 'Terminados'}, {titleCard: 'Terminados'}, {titleCard: 'Terminados'}, {titleCard: 'Terminados'}, {titleCard: 'Terminados'}, {titleCard: 'Terminados'}, ]},
      {id: 4, title: 'Test'},
      {id: 5, title: 'Test'},
      {id: 6, title: 'Test'},
      {id: 7, title: 'Test'},
      {id: 8, title: 'Test'},
      {id: 9, title: 'Test'},
      {id: 10, title: 'Test'},
    ]
  }
}

KanbanBoardController['$inject'] = [
  '$scope',
  '$state',
  '$interval',
]

export default KanbanBoardController;