import * as angular from 'angular'
import { personFormMudule } from './person-form'
import { personListMudule } from './person-list'

const PersonModule = angular
    .module('app.person', [
        personFormMudule,
        personListMudule,
    ])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.person', {
            url: '/person',
            abstract: true
        })
    }])
    .name

export { PersonModule }