import { ClienteService } from '../../clientes/services/cliente.service'
import { ContaService } from '../service/conta.service'

class ContaFormController {
    constructor (
        public $state,
        public $scope,
        public clienteService: ClienteService,
        public contaService: ContaService
    ) {}

    addContaCC(cliente) {
        return this.contaService.postContaCC(cliente)
    }

    addContaCP(cliente) {
        return this.contaService.postContaCP(cliente)
    }
}

ContaFormController ['$inject'] = [
    '$state',
    '$scope',
    'clienteService',
    'contaService'
]

export { ContaFormController }