import * as angular from 'angular' 
import './person-form.scss'
import { PersonFormController } from './person-form'
import template from './person-form.html'
import { mgbInputText } from '../../components/mgb-input-text/mgb-input-text'
import { mgbInputNumber } from '../../components/mgb-input-number/mgb-input-number'
import { personDocument } from '../components/person-documents/person-documents'
import { personData } from '../components/person-data/person-data'
import { personLocation } from '../components/person-location/person-location'

const personFormMudule = angular
    .module('person-form', [])
    .component('mgbInputText', mgbInputText)
    .component('mgbInputNumber', mgbInputNumber)
    .component('personDocument', personDocument)
    .component('personData', personData)
    .component('personLocation', personLocation)
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