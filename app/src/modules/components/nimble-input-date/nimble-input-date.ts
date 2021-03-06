import './nimble-input-date.scss'
import template from './nimble-input-date.html'

class NimbleInputDateController {
    private inputLabel: String
    private inputValue: String
    private ngModel: String
    private placeholder: String

    constructor (
    ) {}

    $onInit() {

    }
}

const nimbleInputDate = {
    bindings: {
        inputLabel: '=',
        inputValue:  '=',
        ngModel: '=',
        placeholder: '=?',
    },
    controller: NimbleInputDateController,
    controllerAs: '$ctrl',
    templateUrl: template
}

NimbleInputDateController['$inject'] = []

export { nimbleInputDate }