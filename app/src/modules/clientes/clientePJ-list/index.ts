import * as angular from 'angular'
import template from '../clientePJ-list/clientePJ-list.html'
import { ClientePJListController } from './clientePJ-list'
import { ClienteService } from  '../services/cliente.service'

const clientePJListModule = angular
    .module('clientePJ.list', [])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.clientePJ-list', {
            url: '/clientePJ-list',
            templateUrl: template,
            controller: ClientePJListController,
            controllerAs: '$ctrl',
            resolve: {
                entity: ['clienteService', (clienteService: ClienteService) => {
                    return clienteService.getClientesPJ().then((resp) => resp.data)
                }]
            }
        })
    }])
    .name

export { clientePJListModule }