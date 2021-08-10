class ClientePFListController {
    constructor (
        public $scope,
        public $state,
        public entity,
        public clienteService
    ) {}
}

ClientePFListController['$inject'] = [
    '$scope',
    '$state',
    'entity',
    'clienteService'
]

export { ClientePFListController }