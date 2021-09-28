import './nimble-input-cpfcnpj.scss'
import template from './nimble-input-cpfcnpj.html'

class NimbleInputCpfCnpjController {
    private ngModel
    private typePerson
    private entity

    constructor () {}

    $onInit() {
    }

    onChange() {
        if (this.ngModel.length == 14) {
            this.typePerson = 'pj'
        } else {
            this.typePerson = 'pf'
        }
    }
}

const nimbleInputCpfCnpj = {
    bindings: {
        ngModel: '=?',
        typePerson: '=?',
        entity: '=?',
    },
    controller: NimbleInputCpfCnpjController,
    controllerAs: '$ctrl',
    templateUrl: template
}

NimbleInputCpfCnpjController['$inject'] = []

export { nimbleInputCpfCnpj }