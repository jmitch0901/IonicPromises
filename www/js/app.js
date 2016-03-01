// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
(function(){
var app = angular.module('app', ['ionic']);


//We can use $q service to handle errors!
app.controller('AppCtrl',function($q,$scope,$timeout){

  function add(x,y){
    var q = $q.defer();
    //The $timeout service returns a promise abject by default!
    // return $timeout(function(){
    //   return x+y;
    // },3000);

    //replace with setTimeout for q service

    setTimeout(function(){
      var result = x + y;
      if(result >= 0){
          q.resolve(x+y);
      } else {
        //Tells q to callback with an error!
        q.reject('negative value: '+result);
      }

    },1000);

    return q.promise;

  }

  var startTime = Date.now();

  add(5,-10)
    .then(function(result){
      $scope.result = result;
      $scope.elapsedTime = Date.now() - startTime;
      return add(result,3);
    })
    .then(function(result){
      $scope.result = result;
      $scope.elapsedTime = Date.now() - startTime;
      return add(result,3);
    }/*,function(err){ //Catches a SPECEFIC error!
      return 0;
    }*/)
    .then(function(result){
      $scope.result = result;
      $scope.elapsedTime = Date.now() - startTime;
      return add(result,3);
    })
    .catch(function(err){ //Catches the erros for the whole .then chain
      $scope.failure = err;
    })
    .finally(function(){ //Runs no matter what happens
        $scope.elapsedTime = Date.now() - startTime;
    });


  // add(5,2,function(result){
  //   $scope.result = result;
  //   $scope.elapsedTime = Date.now() - startTime;
  // });

});


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
}());
