import './mgb-input-number.scss'
import template from './mgb-input-number.html'

class MgbInpuNumberController {
    private inputLabel: String
    private inputValue: String

    constructor (
    ) {}

    $onInit() {
        console.log("AAA", this.inputLabel, this.inputValue);
        

    }
}

const mgbInputNumber = {
    bindings: {
        inputLabel: '=',
        inputValue:  '=',
    },
    controller: MgbInpuNumberController,
    controllerAs: '$ctrl',
    templateUrl: template
}

MgbInpuNumberController['$inject'] = [
]

export { mgbInputNumber }