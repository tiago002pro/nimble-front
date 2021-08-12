import './nav-bar.scss'
import template from './nav-bar.html'

class NavbarController {
    private hide:boolean
    constructor (
    ) {}

    $onInit() {
    }
}

const navBar = {
    bindings: {
        hide: '=?'
    },
    controller: NavbarController,
    controllerAs: '$ctrl',
    templateUrl: template
}

NavbarController['$inject'] = [
]

export { navBar }