(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
    $scope.foodSelection = "";
    $scope.message = "";

    $scope.checkFoodToMuch = function () {
        if (this.foodSelection != null && this.foodSelection.length <= 0) {
            this.message = "Please enter data first"
        }else {
            var foodArray = this.foodSelection.split(",");
            if (foodArray.length <= 3) {
                this.message = "Enjoy!"
            } else {
                this.message = "Too Much"
            }
        }
    };
}

})();