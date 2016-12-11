var app = angular.module('myApp',[]);
var count = 0;
app.controller('myCtrl', function($scope) {
    $scope.country="";
    $scope.names = ["Emil", "Tobias", "Linus"];
    
    var onSubmit = function() {
        $scope.count += 1; 
    }
});