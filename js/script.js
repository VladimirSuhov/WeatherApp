

$(document).ready(function(){
  var long;
  var lat; 
  var temp;
 if(navigator.geolocation){
   navigator.geolocation.getCurrentPosition(function(position){
     
      var long = position.coords.longitude;
    var lat = position.coords.latitude;
      var tempSwap = false;
     var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=b732b542d6ae14ed614a0d2c907db949';
     
     $.getJSON(api,function(data){
       var weatherType = data.weather[0].description;
       var celsius = Math.round(data.main.temp - 273);
       var kelvin = Math.round(data.main.temp);
       var farenheit = Math.round(kelvin * (9/5) - 459,67);
       var windSpeed = data.wind.speed;
       var city = data.name;
        var country = data.sys.country;
       
       $("#city").text(city + "," +country);
       $("#temp").text(celsius + " C");
       $("#cloud").text(weatherType);
       $("#wind").text(windSpeed + " М/С");

        $("#temp").click(function(){
       if(tempSwap === true){
        $("#temp").text(farenheit + " F");
        tempSwap=false;
       }
        else{
        $("#temp").text(celsius + " C");
        tempSwap = true;  
        }
       //        if(celsius < 10){
       //   $('body').css("background-image", 'url()');
       // }
       // else if(celsius < 20){
       //   $('body').css("background-image", 'url()');
       // }
       // else if(celsius > 20){
       //   $('body').css("background-image", 'url()');
       // }
});

       
    });
   });

 }
});









