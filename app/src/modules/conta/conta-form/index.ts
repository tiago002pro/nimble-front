import * as angular from 'angular'
import './conta-form.scss'
import template from './conta-form.html'
import { ContaFormController } from './conta-form'
import { ContaService } from '../service/conta.service'

const ContaFormModule = angular
    .module('conta-form', [])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.conta-form', {
            url: '/conta-form',
            templateUrl: template,
            controller: ContaFormController,
            controllerAs: '$ctrl',
        })
    }])
    .name

export { ContaFormModule }