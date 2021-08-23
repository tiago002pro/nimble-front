class PersonFormController {
    private inputLabel: String
    private inputValue: String
    private label: String

    constructor () {}

    $onInit() {
        this.label = 'Nome'
    }
}

PersonFormController['$inject'] = []

export { PersonFormController }