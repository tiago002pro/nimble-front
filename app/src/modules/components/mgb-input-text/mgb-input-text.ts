import './mgb-input-text.scss'
import template from './mgb-input-text.html'

class MgbInputTextController {
    private inputLabel: String
    private inputValue: String
    private ngModel: String

    constructor (
    ) {}

    $onInit() {
        console.log("AAA", this.inputLabel, this.inputValue, this.ngModel);
        

    }
}

const mgbInputText = {
    bindings: {
        inputLabel: '=',
        inputValue:  '=',
        ngModel: '='
    },
    controller: MgbInputTextController,
    controllerAs: '$ctrl',
    templateUrl: template
}

MgbInputTextController['$inject'] = [
]

export { mgbInputText }