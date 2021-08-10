import './nav-bar.scss'
import template from './nav-bar.html'

class NavbarController {
    constructor () {}
}

const navBar = {
    controller: NavbarController,
    controllerAs: '$ctrl',
    templateUrl: template
}

export { navBar }