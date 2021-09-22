import * as angular from 'angular' 
import './person-list.scss'
import template from './person-list.html'
import { PersonService } from '../services/person.service'
import { PersonListController } from './person-list'

const personListMudule = angular
    .module('person-list', [])
    .service('personService', PersonService)
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.person-list', {
            url: '/person-list/:rule',
            templateUrl: template,
            controller: PersonListController,
            controllerAs: '$ctrl',
            resolve: {
                rule: [
                    '$stateParams', ($stateParams) => {
                        return $stateParams.rule
                    }
                ]
            }
        })
    }])
    .name

export { personListMudule }