import * as angular from 'angular'
import { ContaListModule } from './conta-list'
import { ContaFormModule } from './conta-form'
import { ContaService } from './service/conta.service'

const ContaModule = angular 
    .module('app.conta', [
        ContaListModule,
        ContaFormModule
    ])
    .service('contaService', ContaService)
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.conta', {
            url: '/conta',
            abstract: true
        })
    }])

    export { ContaModule }