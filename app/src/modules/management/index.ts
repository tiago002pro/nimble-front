import * as angular from 'angular'
import { HomeController } from './home/home'
import homeTemplate from './home/home.html'

const managementModule = angular
    .module('app.management', [])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.home', {
            url: '/',
            templateUrl: homeTemplate,
            controller: HomeController,
            controllerAs: '$ctrl'
        })
    }])