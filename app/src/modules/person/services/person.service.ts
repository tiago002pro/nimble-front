class PersonService {
    private url: String = 'http://localhost:8080'
    constructor (
        private $http,
    ) {}

    createJuridicalPerson() {
        return this.$http.post(`${this.url}/api/person-juridica/form`)
    }

    createIndividual(entity)  {
        return this.$http.post(`${this.url}/api/person-individual/form`, entity)
    }

    getPersonList() {
        return this.$http.get(`${this.url}/api/person/get/person-list`)
    }

    getPersonListByRule(rule) {
        return this.$http.get(`${this.url}/api/person/get/person-list/rule?rule=${rule}`)
    }

    loadById(id) {
        return this.$http.get(`${this.url}/api/person/${id}`)
    }
}

PersonService['$inject'] = [
    '$http',
]

export { PersonService }