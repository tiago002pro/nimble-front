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
        console.log("this.list", this.list);


        this.listPerson = this.list.content
        console.log("this.listPerson", this.listPerson);
        

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

        console.log("ruleTitle", this.ruleTitle);
        
    }

    async teste(page) {
        console.log("page", page);
        
        this.list = await this.personService.getPersonList(page).then((response) => {return response.data})
        console.log("this.list", this.list);


        this.listPerson = this.list.content
        console.log("this.listPerson", this.listPerson);
    }
}

PersonListController['$inject'] = [
    '$scope',
    'rule',
    '$state',
    'personService',
]

export { PersonListController }