import { PersonService } from "../services/person.service";

class PersonListController {
    private listPerson: any
    private ruleTitle

    constructor (
        public $scope,
        public rule,
        public $state,
        public personService: PersonService
    ) {}

    async $onInit() {
        this.listPerson = await this.personService.getPersonList().then((response) => {return response.data})

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
}

PersonListController['$inject'] = [
    '$scope',
    'rule',
    '$state',
    'personService',
]

export { PersonListController }