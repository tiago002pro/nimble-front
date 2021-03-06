import * as angular from 'angular'
import './kanban-board/kanban.scss'
import template from './kanban-board/kanban.html'
import { board } from './kanban-board/components/board/board'
import { card } from './kanban-board/components/card/card'
import { BoardService } from './kanban-board/services/board.service'
import { KanbanBoardController } from './kanban-board/kanban'

const KanbanModule = angular
    .module('app.kanban', [])
    .component('board', board)
    .component('card', card)
    .service('boardService', BoardService)
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
        .state('app.kanban', {
            url: '/kanban',
            templateUrl: template,
            controller: KanbanBoardController,
            controllerAs: '$ctrl'
        })
    }])