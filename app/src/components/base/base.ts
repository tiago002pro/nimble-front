import './base.scss'
import template from './base.html'

class BaseController {
    private showMenu = true
    constructor () {}

    $onInit() {
    }
}

const base = {
    controller: BaseController,
    controllerAs: '$ctrl',
    templateUrl: template
}

export { base }