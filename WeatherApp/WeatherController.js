(function(){
    
   var app = angular.module("WeatherApp",[]);
  
   var WeatherController = function($scope, WeatherService){
     
	 $scope.zipcode = "94040";
	 $scope.error  = "";
	 $scope.isVisible = false;
	 $scope.ButtonClick = function () {
		 getTemperature($scope.zipcode);  
     }	 

	
     var onFetchError = function(message){
       $scope.error = "Error Fetching Weather Information";
	   $scope.isVisible = false;
     };
     
     var onFetchCompleted = function(data){
		$scope.isVisible = true;
		$scope.error = "";
        $scope.humidity =data.humidity;
		$scope.name =data.name;
		$scope.pressure =data.pressure;
		$scope.tempMax =data.tempMax;
		$scope.tempMin =data.tempMin;
     };
     
     var getTemperature = function(zip){
       WeatherService.get(zip).then(onFetchCompleted,onFetchError);
     };
   };
  
   app.controller("WeatherController", WeatherController);
  
}());