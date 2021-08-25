import './nav-bar.scss'
import template from './nav-bar.html'

class NavbarController {
    constructor (
    ) {}

    $onInit() {
    }
}

const navBar = {
    bindings: {
    },
    controller: NavbarController,
    controllerAs: '$ctrl',
    templateUrl: template
}

NavbarController['$inject'] = [
]

export { navBar }