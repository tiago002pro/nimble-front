import { ModalCardController, templateModal } from "../../kanban/kanban-board/components/modal-card/modal-card";
import { PersonAddress } from "../interfaces/person.address.interface";
import { PersonEmail } from "../interfaces/person.email.interface";
import { Person } from "../interfaces/person.interface";

class PersonFormController {
    private entity: Person
    private inputLabel: String
    private inputValue: String
    private label: String

    constructor (
    ) {}

    $onInit() {

        this.entity = {}
        this.entity.addresses = []
        this.entity.emails = []
        this.entity.phones = []
        this.entity.documents = []
        
        console.log(this.entity);

    }

    save() {
        console.log("Save Person", this.entity);
        
    }
}

PersonFormController['$inject'] = [
]

export { PersonFormController }