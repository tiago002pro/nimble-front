import './person-location.scss'
import template from './person-location.html'
import { PersonAddress } from '../../interfaces/person.address.interface'

class PersonLocationController {
    private addresses
    constructor() {}

    $onInit() {
        console.log("addresses", this.addresses);
        
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