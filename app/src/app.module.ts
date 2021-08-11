import * as angular from 'angular'
import 'angular-ui-bootstrap'
import 'bootstrap'
import '@uirouter/angularjs'
import './modules'


import './app.module.scss'
import { base } from './components/base/base'
import { footer } from './components/footer/footer'
import { sideBar } from './components/side-bar/side-bar'

angular.module('app', [
    'ui.bootstrap',
    'ui.router',
    'app.management',
    'app.cliente',
    'app.conta',

])
.component('base', base)
.component('sidebar', sideBar)
.component('footer', footer)
.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
    .state('app', {
        abstract: true,
        component: 'base'
    })
    $urlRouterProvider.otherwise('/')
}])