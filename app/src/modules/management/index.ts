import * as angular from 'angular'
import homeTemplate from './home/home.html'
import HomeController from './home/home'

const managementModule = angular.module('app.management', [])
.config(['$stateProvider', ($stateProvider) => {
    $stateProvider
    .state('app.home', {
        url: '/',
        templateUrl: homeTemplate,
        controller: HomeController,
        controllerAs: '$ctrl'
    })
}])