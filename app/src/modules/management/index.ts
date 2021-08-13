import * as angular from 'angular'
import homeTemplate from './home/home.html'
import HomeController from './home/home'
import { columnFrame } from './home/components/column-frame/column-frame'

const managementModule = angular
.module('app.management', [])
.component('columnFrame', columnFrame)
.config(['$stateProvider', ($stateProvider) => {
    $stateProvider
    .state('app.home', {
        url: '/',
        templateUrl: homeTemplate,
        controller: HomeController,
        controllerAs: '$ctrl'
    })
}])