class PersonService {
    private url: String = 'http://localhost:8080'
    constructor (
        private $http,
    ) {}

    createJuridicalPerson(entity) {
        return this.$http.post(`${this.url}/api/person-juridica/form`, entity)
    }

    createIndividual(entity)  {
        return this.$http.post(`${this.url}/api/person-individual/form`, entity)
    }

    getPersonList(page) {
        return this.$http.get(`${this.url}/api/person/get/person-list/?page=${page}&size=10`)
    }

    getPersonListByRule(rule, page) {
        return this.$http.get(`${this.url}/api/person/get/person-list/rule?rule=${rule}&page=${page}&size=10`)
    }

    loadById(id) {
        return this.$http.get(`${this.url}/api/person/${id}`)
    }

    deleteById(id) {
        this.$http.delete(`${this.url}/api/person/delete/${id}`)
    }
}

PersonService['$inject'] = [
    '$http',
]

export { PersonService }