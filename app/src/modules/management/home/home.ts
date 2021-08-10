import './home.scss'

class HomeController {
  private selected: number = 0
  private cardsColumns: number = 3
  private carousel: string[] = [
    'http://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/9/9f/GTAV.PS4.1080P.1232.jpg',
    'https://i.pinimg.com/originals/03/c6/a7/03c6a7a02b10ae4fbfe8dd54aa453fd8.jpg',
    'https://cs2.gtaall.com.br/attachments/5a9f9/2018-06/original/19ccdc51b5c96ec697dcf9de11789eae721c54a0/8827-GTA5-2018-06-29-10-34-14-65.jpg',
  ]
  private cards: object[] = [
    {
      image: 'https://media-exp1.licdn.com/dms/image/C561BAQG8jBJ-6Uw_2g/company-background_10000/0/1552568277311?e=2159024400&v=beta&t=leAN-aEQwoogMSo3h1UBJKGHDmxf6Sv9KTSZszxKzV8',
      title: 'É hora de cuidar do que realmente importa',
      button: 'Veja mais',
    },{
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEm4nTVSQJFC_tFo0QC1CEUgFsxZCpSp7SUQ&usqp=CAU',
      title: 'O crédito que você precisa agora com até 6 anos pra pagar',
      button: 'Saiba mais',
    },{
      image: 'https://kcm-www.s3.amazonaws.com/production/s3fs-public/daily_confessions_for_financial_victory_1239968128.jpg',
      title: 'Pra fazer um sonho decolar e pra tudo que você imaginar',
      button: 'Vem ser cliente',
    },{
      image: 'https://www.upgrade.com/img/blog-loan-vs-credit-card.jpg',
      title: 'Veja como é fácil ter um MazeCard pra chamar de seu',
      button: 'Peça seu cartão',
    },{
      image: 'https://unctad.org/sites/default/files/2020-08/Investment-Trends_800x450.jpg',
      title: 'Soluções em investimentos que combinam com você',
      button: 'Confira',
    },{
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsn6_SKsQ7R8HpzxNIjpPVEOCQH4hIlor6zw&usqp=CAU',
      title: 'Conheça todos os seguros que oferecemos para cuidar de você',
      button: 'Seguros',
    },
  ]
  constructor(
    public $scope,
    public $state,
    public $interval,
  ) {}

  $onInit = () => {
    this.$interval(() => {
      this.forwardCarousel()
    }, 5000)
  }

  goAccountCreate = () => {
    this.$state.go('account.create')
  }

  goAccountManage = () => {
    this.$state.go('account.manage', { id: 1 })
  }

  backwardCarousel = () => {
    if (this.selected == 0) {
      this.selected = 2
      return
    }
    this.selected--
  }

  forwardCarousel = () => {
    if (this.selected == 2) {
      this.selected = 0
      return
    }
    this.selected++
  }

  select = (index: number) => {
    this.selected = index
  }

  getCards = (line: number) => {
    console.log(line)
    console.log(this.cards.slice(line * this.cardsColumns, (line + 1) * this.cardsColumns))
  }
}

HomeController['$inject'] = [
  '$scope',
  '$state',
  '$interval',
]

export default HomeController;