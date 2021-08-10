import * as angular from 'angular'
import './conta-list.scss'
import template from './conta-list.html'
import { ContaListController } from '../conta-list/conta-list'
import { ContaService } from '../service/conta.service'

const ContaListModule = angular
    .module('conta-list', [])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.conta-list', {
            url: '/conta-list',
            templateUrl: template,
            controller: ContaListController,
            controllerAs: '$ctrl',
            resolve: {
                entity: ['contaService', (contaService: ContaService) => {
                    return contaService.getContas().then((resp) => resp.data)
                }]
            }
        })
    }])
    .name

export { ContaListModule } 
