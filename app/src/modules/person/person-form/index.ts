import * as angular from 'angular' 
import './person-form.scss'
import { PersonFormController } from './person-form'
import template from './person-form.html'

const personFormMudule = angular
    .module('person-form', [])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.person-form', {
            url: '/person-form',
            templateUrl: template,
            controller: PersonFormController,
            controllerAs: '$ctrl'
        })
    }])
    .name

export { personFormMudule }