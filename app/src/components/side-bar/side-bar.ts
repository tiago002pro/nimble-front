import './side-bar.scss'
import template from './side-bar.html'

class SidebarController {
    private testeclick: boolean = false
    private hide:boolean
    constructor (
        public $scope,
        public $rootScope,
        public $element,
    ) {}

    $onInit() {
        console.log("hideSideBar", this.hide);
    }

    hide_menu(){
        console.log("hideSideBar", this.hide);        
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