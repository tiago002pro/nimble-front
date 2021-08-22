import * as angular from 'angular'
import { personFormMudule } from './person-form'

const PersonModule = angular
    .module('app.person', [
        personFormMudule
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