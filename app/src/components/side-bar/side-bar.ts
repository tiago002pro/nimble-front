import './side-bar.scss'
import template from './side-bar.html'

class SidebarController {
    private hide: boolean
    private showdropDowMenu1 = false
    private showdropDowMenu2 = false
    private black = true
    private white = false
    private showMenu = true

    constructor (
        public $scope,
        public $rootScope,
        public $element,
    ) {}

    $onInit() {
    }

    dropDow1() {
        this.showdropDowMenu1 = !this.showdropDowMenu1
    }

    dropDow2() {
        this.showdropDowMenu2 = !this.showdropDowMenu2
    }

    SeeMenu() {
        this.showMenu = !this.showMenu
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