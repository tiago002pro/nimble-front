class ListCardService {
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

ListCardService['$inject'] = [
    '$http'
]

export { ListCardService }