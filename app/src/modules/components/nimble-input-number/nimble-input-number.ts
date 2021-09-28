import './nimble-input-number.scss'
import template from './nimble-input-number.html'

class NimbleInpuNumberController {
    private inputLabel: String
    private inputValue: String
    private placeholder: String

    constructor (
    ) {}

    $onInit() {
    }
}

const nimbleInputNumber = {
    bindings: {
        inputLabel: '=',
        inputValue:  '=',
        placeholder: '=?',
    },
    controller: NimbleInpuNumberController,
    controllerAs: '$ctrl',
    templateUrl: template
}

NimbleInpuNumberController['$inject'] = []

export { nimbleInputNumber }