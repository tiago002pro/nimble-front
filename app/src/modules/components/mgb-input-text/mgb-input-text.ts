import './mgb-input-text.scss'
import template from './mgb-input-text.html'

class MgbInputTextController {
    private inputLabel: String
    private inputValue: String

    constructor (
    ) {}

    $onInit() {
        console.log("AAA", this.inputLabel, this.inputValue);
        

    }
}

const mgbInputText = {
    bindings: {
        inputLabel: '=',
        inputValue:  '=',
    },
    controller: MgbInputTextController,
    controllerAs: '$ctrl',
    templateUrl: template
}

MgbInputTextController['$inject'] = [
]

export { mgbInputText }