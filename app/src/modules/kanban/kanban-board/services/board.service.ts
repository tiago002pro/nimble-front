class BoardService {
    private url: String = 'http://localhost:8080/api/ListCards'
    constructor(
        public $http,
    ) {}

    getListCard() {
        return this.$http.get(`${this.url}/get`)
    }

    postListCard() {
        return this.$http.post(`${this.url}/post`)
    }
}

BoardService['$inject'] = [
    '$http'
]

export { BoardService }