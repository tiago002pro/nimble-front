import './nimble-input-text.scss'
import template from './nimble-input-text.html'

class NimbleInputTextController {
    private inputLabel: String
    private inputValue: String
    private ngModel: String
    private placeholder: String

    constructor (
    ) {}

    $onInit() {

    }
}

const nimbleInputText = {
    bindings: {
        inputLabel: '=',
        inputValue:  '=',
        ngModel: '=',
        placeholder: '=?',
    },
    controller: NimbleInputTextController,
    controllerAs: '$ctrl',
    templateUrl: template
}

NimbleInputTextController['$inject'] = []

export { nimbleInputText }