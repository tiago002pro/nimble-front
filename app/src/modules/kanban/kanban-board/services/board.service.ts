import { ModalCardController, templateModal } from "../components/modal-card/modal-card";

class BoardService {
    private url: String = 'http://localhost:8080/api/ListCards'
    constructor(
        public $http,
        public $uibModal,
    ) {}

    getListCard() {
        return this.$http.get(`${this.url}/get`)
    }

    postListCard() {
        return this.$http.post(`${this.url}/post`)
    }

    openCardModal() {
        const modalInstance = this.$uibModal.open({
          templateUrl: templateModal,
          controller: ModalCardController,
          controllerAs: '$ctrl',
          animation: true,
          backdrop: 'static',
          size: 'md',
          resolve: {}
        })
        return modalInstance.result
      }
}

BoardService['$inject'] = [
    '$http',
    '$uibModal',
]

export { BoardService }