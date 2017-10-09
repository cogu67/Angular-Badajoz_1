angular.module("appModule", [])
.controller("AppController", ['$scope',function ($scope){
    $scope.sName='Alejandro'; 
    $scope.sCurso='AngularJS';
    $scope.btnBorrar=function(){
        $scope.sName=''
    } 

}])
