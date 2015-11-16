# Table Of Contents

* [Summary](#Summary)
* [Developer Information](#DeveloperInformation)
	* [Components](#Components) 
	* [Technologies used](#Technologiesused)
	* [External Dependency](#ExternalDependency)
* [Deployment](#Deployment)
	* [WeatherAPI](#WeatherAPI)
	* [WeatherApp](#WeatherApp)
* [Appendix](#Appendix)       

# <a name='Summary'>Summary</a>
This Single Page Application provides weather information for a specific zipcode in US.

# <a name='DeveloperInformation'>Developer Information</a>
##<a name='Components'>Components</a>
There are two parts to this application           
###WeatherApp     
This implementation is the front end for the app designed in AngularJs    
###WeatherAPI           
This solution exposes a rest end point, designed in ExpressJs. The API returns weather information based on supplied ZipCode.

#####End Point

	Method: GET
	http://localhost:3000/weather?zipcode=9404
	
	Result
	{"name":"Mountain View","humidity":93,"tempMax":11.67,"tempMin":11.67,"pressure":1021.35}

##<a name='Technologiesused'>Technologies  used</a>
####NodeJs
####AngularJs
####ExpressJs

##<a name='ExternalDependency'>External Dependency</a>
[openweathermap.org](openweathermap.org) exposes an api for getting weather information based on zipcode in US.

#####Eaxmple
	http://api.openweathermap.org/data/2.5/weather?zip=94040,us&APPID=240feac5f7a9c0d231bd0a220cd4ea64&units=metric 

#<a name='Deployment'>Deployment</a>
##<a name='WeatherAPI'>WeatherAPI</a>
Execute in command line to start the service

	\WeatherApplication\WeatherApi\node_modules>node server.js
	
	command line will display as below for successfull run 
	Weather API listening at http://:::3000

##<a name='WeatherApp'>WeatherApp</a>

Once the service is up, **index.html** can be opened in any browser to see the weather information. 

#<a name='Appendix'>Appendix</a>

SAZ files are attached for web api