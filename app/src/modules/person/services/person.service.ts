class PersonService {
    private url: String = 'http://localhost:8080/'
    constructor (
        private $http,
    ) {}

    createJuridicalPerson() {
        return this.$http.post(`${this.url}/api/pessoa-juridica/form`)
    }
}

PersonService['$inject'] = [
    '$http',
]

export { PersonService }