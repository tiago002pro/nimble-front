import * as angular from 'angular'
import './clientePF-list.scss'
import template from '../clientePF-list/clientePF-list.html'
import { ClientePFListController } from './clientePF-list'
import { ClienteService } from  '../../services/cliente.service'

const clientePFListModule = angular
    .module('clientePF.list', [])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.clientePF-list', {
            url: '/clientePF-list',
            templateUrl: template,
            controller: ClientePFListController,
            controllerAs: '$ctrl',
            resolve: {
                entity: ['clienteService', (clienteService: ClienteService) => {
                    return clienteService.getClientesPF().then((resp) => resp.data)
                }]
            }
        })
    }])
    .name

export { clientePFListModule }