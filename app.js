var app = angular.module("TrueSolutions", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "views/home.html",
    controller:"HomeController"
  })
  .when("/home", {
    templateUrl : "views/home.html",
    controller:"HomeController"
  })
  .when("/about", {
    templateUrl : "views/about.html",
    controller:"AboutController"
  })
  .when("/careers", {
    templateUrl : "views/careers.html",
    controller:"CareerController"
  })
  .when("/contact", {
    templateUrl : "views/contact.html",
    controller:"ContactController"
  })
  .when("/services", {
    templateUrl : "views/services.html",
    controller:"ServicesController"
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
