import './nimble-input-cpfcnpj.scss'
import template from './nimble-input-cpfcnpj.html'

class NimbleInputCpfCnpjController {
    private ngModel
    constructor () {}

    $onInit() {
        console.log("ngModel", this.ngModel)

    }

    onChange() {
        console.log("ngModel", this.ngModel)
    }
}

const nimbleInputCpfCnpj = {
    bindings: {
        ngModel: '=?'
    },
    controller: NimbleInputCpfCnpjController,
    controllerAs: '$ctrl',
    templateUrl: template
}

NimbleInputCpfCnpjController['$inject'] = []

export { nimbleInputCpfCnpj }