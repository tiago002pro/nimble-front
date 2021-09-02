import './side-bar.scss'
import template from './side-bar.html'

class SidebarController {
    private hide: boolean
    private showdropDowMenu: boolean
    private black = true
    private white = false

    constructor (
        public $scope,
        public $rootScope,
        public $element,
    ) {}

    $onInit() {
        this.showdropDowMenu = false
    }

    hide_menu(){
        this.hide = !this.hide
        if(this.hide) {
            this.showdropDowMenu = false;
        }
    }

    dropDowMenu() {
        this.showdropDowMenu = !this.showdropDowMenu
        if (this.hide) {
            this.hide = false
        }
        
    }

    collorMenu() {
        this.black = !this.black
        this.white = !this.white
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