class ClienteService {
    private url: string = 'http://localhost:8080'
    constructor (
        public $http,
    ) {}

    getClientes() {
        return this.$http.get(`${this.url}/clientes`)
    }

    getClientesPF() {
        return this.$http.get(`${this.url}/clientes/pf`)
    }

    getClientesPJ() {
        return this.$http.get(`${this.url}/clientes/pj`)
    }

    postClientePF(cliente) {
        return this.$http.post(`${this.url}/clientes/pf`, cliente)
    }

    postClientePJ(cliente) {
        return this.$http.post(`${this.url}/clientes/pj`, cliente)
    }

    getClienteID(id) {
        return this.$http.get(`${this.url}/clientes/` + id)
    }
}

ClienteService['$inject'] = [
    '$http'
]

export { ClienteService }