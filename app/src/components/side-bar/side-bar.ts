import './side-bar.scss'
import template from './side-bar.html'

class SidebarController {
    private hide:boolean
    constructor (
        public $scope,
        public $rootScope,
        public $element,
    ) {}

    $onInit() {
    }

    hide_menu(){
        this.hide = !this.hide
    }
}

const sideBar = {
    bindings: {
        hide: '=?',
    },
    controller: SidebarController,
    controllerAs: '$ctrl',
    templateUrl: template
}

SidebarController['$inject'] = [
    '$scope',
    '$rootScope',
    '$element',
]

export { sideBar }