import * as angular from 'angular' 
import './person-form.scss'
import { PersonFormController } from './person-form'
import template from './person-form.html'
import { personDocument } from '../components/person-documents/person-documents'
import { personData } from '../components/person-data/person-data'
import { personLocation } from '../components/person-location/person-location'
import { PersonService } from '../services/person.service'
import { nimbleInputCpfCnpj } from '../../components/nimble-input-cpfcnpj/nimble-input-cpfcnpj'
import { nimbleInputText } from '../../components/nimble-input-text/nimble-input-text'
import { nimbleInputNumber } from '../../components/nimble-input-number/nimble-input-number'
import { nimbleInputDate } from '../../components/nimble-input-date/nimble-input-date'
import { nimbleInputCep } from '../../components/nimble-input-cep/nimble-input-cep'
import { nimbleInputPhone } from '../../components/nimble-input-phone/nimble-input-phone'

const personFormMudule = angular
    .module('person-form', [])
    .component('nimbleInputText', nimbleInputText)
    .component('nimbleInputNumber', nimbleInputNumber)
    .component('nimbleInputCpfCnpj', nimbleInputCpfCnpj)
    .component('nimbleInputDate', nimbleInputDate)
    .component('nimbleInputCep', nimbleInputCep)
    .component('nimbleInputPhone', nimbleInputPhone)
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
            controllerAs: '$ctrl',
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