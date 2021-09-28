import './nimble-input-cep.scss'
import template from './nimble-input-cep.html'

class NimbleInputCepController {
    private inputLabel: String
    private inputValue: String
    private ngModel: String
    private placeholder: String

    constructor (
    ) {}

    $onInit() {

    }
}

const nimbleInputCep = {
    bindings: {
        inputLabel: '=',
        inputValue:  '=',
        ngModel: '=',
        placeholder: '=?',
    },
    controller: NimbleInputCepController,
    controllerAs: '$ctrl',
    templateUrl: template
}

NimbleInputCepController['$inject'] = []

export { nimbleInputCep }