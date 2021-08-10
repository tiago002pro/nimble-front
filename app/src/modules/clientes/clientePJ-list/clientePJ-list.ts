class ClientePJListController {
    constructor (
        public $scope,
        public $state,
        public entity,
        public clienteService
    ) {}
}

ClientePJListController['$inject'] = [
    '$scope',
    '$state',
    'entity',
    'clienteService'
]

export { ClientePJListController }