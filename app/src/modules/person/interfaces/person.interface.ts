import { PersonAddress } from "./person.address.interface";
import { PersonDocument } from "./person.document.interface";
import { PersonEmail } from "./person.email.interface";
import { PersonPhone } from "./person.phone.interface";
import { PersonRuleList } from "./person.rule.interface";

export interface Person {
    id?: any,
    name?: String,
    dateofbirthorfondation?: Date,
    addresses?: Array<PersonAddress>,
    phones?: Array<PersonPhone>,
    emails?: Array<PersonEmail>,
    documents?: Array<PersonDocument>,
    ruleList?: Array<PersonRuleList>,
    shortName?: String,
    cpf?: String,
    rg?: String,
    cnpj?: String,
    ie?: String,
}