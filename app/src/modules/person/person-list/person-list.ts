import { Person } from "../interfaces/person.interface";
import { PersonService } from "../services/person.service";

class PersonListController {
    private listPerson: any

    constructor (
        public $scope,
        public rule,
        public $state,
        public personService: PersonService
    ) {}

    async $onInit() {
        this.listPerson = await this.personService.getPersonList().then((response) => {return response.data})

        //  const person = await this.personService.loadById(1).then((response) => {return response.data})
         
         
        
    }
}

PersonListController['$inject'] = [
    '$scope',
    'rule',
    '$state',
    'personService',
]

export { PersonListController }