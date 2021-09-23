import * as angular from 'angular' 
import './person-form.scss'
import { PersonFormController } from './person-form'
import template from './person-form.html'
import { mgbInputText } from '../../components/mgb-input-text/mgb-input-text'
import { mgbInputNumber } from '../../components/mgb-input-number/mgb-input-number'
import { personDocument } from '../components/person-documents/person-documents'
import { personData } from '../components/person-data/person-data'
import { personLocation } from '../components/person-location/person-location'
import { PersonService } from '../services/person.service'

const personFormMudule = angular
    .module('person-form', [])
    .component('mgbInputText', mgbInputText)
    .component('mgbInputNumber', mgbInputNumber)
    .component('personDocument', personDocument)
    .component('personData', personData)
    .component('personLocation', personLocation)
    .service('personService', PersonService)
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.person-form', {
            url: '/person-form/:rule',
            templateUrl: template,
            controller: PersonFormController,
            controllerAs: '$ctrl',
            resolve: {
                entity: [() => {return null}],
                rule: ['$stateParams', ($stateParams) => $stateParams.rule]
            }
        })
        .state('app.person-edit', {
            url:'/person-form/:rule/edit/:id',
            templateUrl: template,
            controller: PersonFormController,
            resolve: {
                entity: ['$stateParams', 'personService', ($stateParams, personService: PersonService) => {
                    return personService.loadById($stateParams.id).then((response) => response.data)
                }],
                rule: ['$stateParams', ($stateParams) => $stateParams.rule]
            }
        })
    }])
    .name

export { personFormMudule }