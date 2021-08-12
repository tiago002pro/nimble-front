import './base.scss'
import template from './base.html'

class BaseController {
    private hide: boolean
    constructor () {}

    $onInit() {
        this.hide = false
    }
}

const base = {
    controller: BaseController,
    controllerAs: '$ctrl',
    templateUrl: template   
}

export { base }