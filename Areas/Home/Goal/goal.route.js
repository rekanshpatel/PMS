myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home.goal', {
          url: '/goal',
          views: {		
              '': {
                  templateUrl: 'Areas/home/goal/goal.html',
                  controller: 'goalController'
              },
              'goal2017': {
                  templateUrl: 'Areas/home/goal/goal2017.html',
                  controller: 'goal2017Controller'
              },
              'goal2018': {
                  templateUrl: 'Areas/home/goal/goal2018.html',		
                  controller: 'goal2018Controller'		
              },		
              'goal2019': {
                  templateUrl: 'Areas/home/goal/goal2019.html',
                  controller: 'goal2019Controller'
              }
          }
      })
})