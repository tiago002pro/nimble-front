import * as angular from 'angular' 
import './person-form.scss'
import { PersonFormController } from './person-form'
import template from './person-form.html'
import { mgbInputText } from '../../components/mgb-input-text/mgb-input-text'
import { mgbInputNumber } from '../../components/mgb-input-number/mgb-input-number'

const personFormMudule = angular
    .module('person-form', [])
    .component('mgbInputText', mgbInputText)
    .component('mgbInputNumber', mgbInputNumber)
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