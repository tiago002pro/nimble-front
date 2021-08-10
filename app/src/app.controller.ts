class AppController {
    constructor(
      public $scope
    ) {}
  
    $onInit() {
      this.$scope.message = "Hello World!";
    }
  }
  
  AppController['$inject'] = [
    '$scope'
  ]
  
  export default AppController