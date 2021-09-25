import './nimble-input-number.scss'
import template from './nimble-input-number.html'

class NimbleInpuNumberController {
    private inputLabel: String
    private inputValue: String

    constructor (
    ) {}

    $onInit() {
    }
}

const nimbleInputNumber = {
    bindings: {
        inputLabel: '=',
        inputValue:  '=',
    },
    controller: NimbleInpuNumberController,
    controllerAs: '$ctrl',
    templateUrl: template
}

NimbleInpuNumberController['$inject'] = []

export { nimbleInputNumber }