import { ContaService } from '../service/conta.service'

class ContaListController {
    constructor (
        public $scope,
        public $state,
        public entity,
        public contaService: ContaService
    ) {}

}
ContaListController ['$inject'] = [
    '$scope',
    '$state',
    'entity',
    'contaService'
]

export { ContaListController }

