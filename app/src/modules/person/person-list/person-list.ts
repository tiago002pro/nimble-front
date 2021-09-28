import { PersonService } from "../services/person.service";

class PersonListController {
    private listPerson: any
    private ruleTitle
    private list

    constructor (
        public $scope,
        public rule,
        public $state,
        public personService: PersonService
    ) {}

    async $onInit() {
        this.list = await this.personService.getPersonList(0).then((response) => {return response.data})

        this.listPerson = this.list.content

        switch(this.rule) {
            case "Clientes": 
                this.ruleTitle = "Cliente"
                break;
            case "Fornecedores": 
                this.ruleTitle = "Fornecedor"
                break
            default:
                this.ruleTitle = "Funcionário"
        }

    }

    async teste(page) {
        this.list = await this.personService.getPersonList(page).then((response) => {return response.data})
        this.listPerson = this.list.content
    }

    deletePersonById(id) {
        this.personService.deleteById(id)
        location.reload()
    }
}

PersonListController['$inject'] = [
    '$scope',
    'rule',
    '$state',
    'personService',
]

export { PersonListController }