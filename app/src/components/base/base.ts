import './base.scss'
import template from './base.html'

class BaseController {
    constructor () {}
}

const base = {
    controller: BaseController,
    controllerAs: '$ctrl',
    templateUrl: template   
}

export { base }