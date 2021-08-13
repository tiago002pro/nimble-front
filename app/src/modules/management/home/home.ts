import './home.scss'

class HomeController { 
  private titles: any
  private title: String
  private card: any
  private columns: any
  
  constructor() {}
  
  $onInit() {
    this.titles = ['Stories', 'To Do', 'In Progress', 'Testing', 'Done',]
    this.title = 'Teste'
    this.columns = [
      {id: 1, title: 'To Do', card: [{titleCard: 'A Fazer 1...'}, {titleCard: 'A Fazer 2...'}]},
      {id: 2, title: 'In Progres', card: [{titleCard: 'Fazendo'}, {titleCard: 'Fazendo'}, {titleCard: 'Fazendo'}]},
      {id: 3, title: 'Done', card: [{titleCard: 'Terminados'}, {titleCard: 'Terminados'}, {titleCard: 'Terminados'}, {titleCard: 'Terminados'}, {titleCard: 'Terminados'}, {titleCard: 'Terminados'}, {titleCard: 'Terminados'}, {titleCard: 'Terminados'}, {titleCard: 'Terminados'}]}
    ]
  
  }

  makingCards() {
    this.titles.array.forEach(element => {
      
    });
  }
}

HomeController['$inject'] = [
  '$scope',
  '$state',
  '$interval',
]

export default HomeController;