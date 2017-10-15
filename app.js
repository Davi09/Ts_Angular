var app = angular.module("TrueSolutions", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "views/home.html"
  })
  .when("/home", {
    templateUrl : "views/home.html"
  })
  .when("/about", {
    templateUrl : "views/about.html"
  })
  .when("/careers", {
    templateUrl : "views/careers.html"
  })
  .when("/contact", {
    templateUrl : "views/contact.html"
  })
  .when("/services", {
    templateUrl : "views/services.html"
  })
  .when("/service1", {
    templateUrl : "views/services/service1.html"
  })
  .when("/service2", {
    templateUrl : "views/services/service2.html"
  })
  .when("/service3", {
    templateUrl : "views/services/service3.html"
  })
  .when("/service4", {
    templateUrl : "views/services/service4.html"
  });
});
