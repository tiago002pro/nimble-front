import * as angular from 'angular'
import template from './kanban-board/kanban-board.html'
import { listCards } from './kanban-board/components/list-cards/list-cards'
import { card } from './kanban-board/components/cards/card'
import { ListCardService } from './kanban-board/services/listCard.service'
import { KanbanBoardController } from './kanban-board/kanban-board'

const managementModule = angular
.module('app.management', [])
.component('listCards', listCards)
.component('card', card)
.service('listCardService', ListCardService)
.config(['$stateProvider', ($stateProvider) => {
    $stateProvider
    .state('app.home', {
        url: '/',
        templateUrl: template,
        controller: KanbanBoardController,
        controllerAs: '$ctrl',
    })
}])