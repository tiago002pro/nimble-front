import * as angular from 'angular'
import template from './kanban-board/kanban-board.html'
import KanbanBoardController from './kanban-board/kanban-board'
import { listCards } from './kanban-board/components/list-cards/list-cards'
import { card } from './kanban-board/components/cards/card'

const managementModule = angular
.module('app.management', [])
.component('listCards', listCards)
.component('card', card)
.config(['$stateProvider', ($stateProvider) => {
    $stateProvider
    .state('app.home', {
        url: '/',
        templateUrl: template,
        controller: KanbanBoardController,
        controllerAs: '$ctrl'
    })
}])