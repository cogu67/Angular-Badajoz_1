angular.module("appModule", [])
.controller("AppController", AppController)

AppController.$inject =['$scope'];

function AppController (AppController){
    // this.vm --> scope
    this.sName='Alejandro'; 
    this.sCurso='AngularJS';
    console.log(this);
    this.btnBorrar=function(){
        $scope.sName=''
    } 
}

