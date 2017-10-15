var app=angular.module('TrueSolutions');
app.controller('CareerController',function CareerController($scope,$http,$window,$location,$anchorScroll){
  $window.scrollTo(0,0);
  $scope.jobsData='';
  $scope.currentJobDescription='';
  $scope.hideDescription=true;
  $http.get('../../assets/json/jobs.json').then(function(success){
    $scope.jobsData=success.data;
  });

  $scope.loadDescription=function(val){
    if(val == $scope.currentJobDescription){
      console.log('true');
      $scope.hideDescription=true;
      $scope.currentJobDescription="";
    }else{
    $scope.hideDescription=false;
    $scope.currentJobDescription=val;
  }
  }
});
