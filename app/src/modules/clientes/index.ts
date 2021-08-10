import * as angular from 'angular'
import { clienteFormModule } from './cliente-form'
import { ClienteService } from  './services/cliente.service'
import { clientePFListModule } from './clientePF-list'
import { clientePJListModule } from './clientePJ-list'

const clienteModule = angular
    .module('app.cliente', [
        clienteFormModule,
        clientePFListModule,
        clientePJListModule
    ])
    .service('clienteService', ClienteService)
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.cliente', {
            url: '/cliente',
            abstract: true
        })
    }])
    .name

export { clienteModule }