import * as angular from 'angular'
import './cliente-form.scss'
import template from './cliente-form.html'
import { ClienteFormController } from './cliente-form'

const clienteFormModule = angular
    .module('cliente-form', [])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.cliente-form', {
            url: '/cliente-form',
            templateUrl: template,
            controller: ClienteFormController,
            controllerAs: '$ctrl'
        })
    }])
    .name

export { clienteFormModule }