import { ClienteService } from '../services/cliente.service'

class ClienteFormController {
    constructor (
        public $scope,
        public $state,
        public clienteService: ClienteService
    ) {}

    addClientePF(cliente) {
        return this.clienteService.postClientePF(cliente)
    }

    addClientePJ(cliente) {
        return this.clienteService.postClientePJ(cliente)
    }
}

ClienteFormController['$inject'] = [
    '$scope',
    '$state',
    'clienteService'
]

export { ClienteFormController }
