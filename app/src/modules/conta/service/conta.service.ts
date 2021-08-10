class ContaService {
    private url: string = 'http://localhost:8080'
    constructor (
        public $http,
    ) {}

    getContas() {
        return this.$http.get(`${this.url}/contas`)
    }

    postContaCC(cliente) {
        return this.$http.post(`${this.url}/contas/cc/clientes/` + cliente)
    }

    postContaCP(cliente) {
        return this.$http.post(`${this.url}/contas/cp/clientes/` + cliente)
    }

    busca(){
        return console.log("Funcionou");
    }

}

ContaService ['$inject'] = [
    '$http'
]
export { ContaService} 