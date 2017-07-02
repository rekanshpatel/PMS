var myApp = angular.module('myApp', ["ui.router", "oc.lazyLoad"])
myApp.config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    $urlRouterProvider.when("", "/home");
    $urlRouterProvider.when("/", "/home");
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state('aboutUs', {
          url: '/aboutus',
          view: {
              '': {
                  templateUrl: 'Areas/aboutus/aboutus.html',
                  resolve: {
                      deps: [
                          "$ocLazyLoad", function ($ocLazyLoad) {
                              return $ocLazyLoad.load({
                                  name: "aboutus",
                                  files: [
                                      "Areas/AboutUs/aboutus.controller.js"
                                  ]
                              });
                          }
                      ]
                  },
                  controller: 'aboutUsController'
              }
          }
      })
      .state('contactUs', {
          url: '/contactus',
          templateUrl: 'Areas/contactus/contactus.html',
          controller: 'contactUsController'
      })
      .state('home', {
          url: '/home',
          templateUrl: 'Areas/home/home.html',
          controller: 'homeController'
      })
      .state('home.company', {
          url: '/company',
          templateUrl: 'Areas/home/company/company.html',
          controller: 'companyController'
      })
})