import './nimble-input-phone.scss'
import template from './nimble-input-phone.html'

class NimbleInputPhoneController {
    private inputLabel: String
    private inputValue: String
    private ngModel: String
    private placeholder

    constructor (
    ) {}

    $onInit() {

    }
}

const nimbleInputPhone = {
    bindings: {
        inputLabel: '=',
        inputValue:  '=',
        ngModel: '=',
        placeholder: '=?',
    },
    controller: NimbleInputPhoneController,
    controllerAs: '$ctrl',
    templateUrl: template
}

NimbleInputPhoneController['$inject'] = []

export { nimbleInputPhone }