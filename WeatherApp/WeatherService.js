(function(){
    
    var WeatherService = function($http){
      
      var getTemperature = function(zipcode){
		  var url = 'http://localhost:3000/weather/temperature?zipcode=' + zipcode
            return $http.get(url)
                        .then(function(response){
                           return response.data; 
                        });
      };
  
      return {
          get: getTemperature
      };
        
    };
    
    var module = angular.module("WeatherApp");
    module.factory("WeatherService", WeatherService);
    
}());
