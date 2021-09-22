import './person-location.scss'
import template from './person-location.html'
import { PersonAddress } from '../../interfaces/person.address.interface'

class PersonLocationController {
    private addresses
    private address: PersonAddress
    constructor() {}

    $onInit() {
        this.address = {}
        this.addresses.push(this.address)
    }
}

const personLocation = {
    bindings: {
        addresses: '=?'
    },
    controller: PersonLocationController,
    controllerAs: '$ctrl',
    templateUrl: template
}

PersonLocationController['$inject'] = []

export { personLocation }