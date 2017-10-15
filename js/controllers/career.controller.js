var app=angular.module('TrueSolutions');
app.controller('CareerController',function CareerController($scope,$http,$window,$location,$anchorScroll,$timeout,anchorSmoothScroll){
  $window.scrollTo(0,0);
  $scope.jobsData='';
  $scope.currentJobDescription="";
  $scope.hideDescription=true;
  $http.get('../../assets/json/jobs.json').then(function(success){
    $scope.jobsData=success.data;
  });

  $scope.loadDescription=function(val){
    $scope.hideDescription=true;
    if(val == $scope.currentJobDescription){
      console.log('true');
      $scope.currentJobDescription="";
    }else{
    $scope.hideDescription=false;
    $scope.currentJobDescription=val;
    $timeout(function () {
      $location.hash('job-content');
      $anchorScroll.yOffset = 80;
      //  $anchorScroll();
      anchorSmoothScroll.scrollTo('job-content',70);
    }, 100);
  }

  }
});
