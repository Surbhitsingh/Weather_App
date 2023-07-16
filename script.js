
const weather = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1940e9d7f3msh55a1ca12da62509p13bb6ajsn649fb822f481',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const aqi = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1940e9d7f3msh55a1ca12da62509p13bb6ajsn649fb822f481',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};



function getWeather(city) {
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, weather)
		.then(response => response.json())
		.then(response => {
			console.log(response);

			temp.innerHTML = response.temp;
			humidity.innerHTML = response.humidity;
			min_temp.innerHTML = response.min_temp;
			max_temp.innerHTML = response.max_temp;
			wind_speed.innerHTML = response.wind_speed;
			sunrise.innerHTML = response.sunrise;
			sunset.innerHTML = response.sunset;
		})
	.catch(err => console.error(err));
}



function getAqi(city){
	fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city , aqi)
	.then(response=>response.json())
	.then(response => {

		console.log(response)
		oqi.innerHTML = response.overall_aqi;

		cco.innerHTML = response.CO.concentration;
		cca.innerHTML = response.CO.aqi;

		nco.innerHTML = response.NO2.concentration;
		nca.innerHTML = response.NO2.aqi;


		oco.innerHTML = response.O3.concentration;
		oca.innerHTML = response.O3.aqi;


		sco.innerHTML = response.SO2.concentration;
		sca.innerHTML = response.SO2.aqi;

		pco.innerHTML = response.PM10.concentration;
		pca.innerHTML = response.PM10.aqi;


	})
	.catch(err=>console.error(err));
}



function getTopCities() {



	// delhi

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi' , weather)
		.then(response => response.json())
		.then(response => {
			console.log(response);
			
			dt.innerHTML = response.temp;
			dh.innerHTML = response.humidity;
			dmi.innerHTML = response.min_temp;
			dma.innerHTML = response.max_temp;
			dw.innerHTML = response.wind_speed;
		})
	.catch(err => console.error(err));

	fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=delhi'  , aqi)
	.then(response=>response.json())
	.then(response => {
		console.log(response)
		da.innerHTML = response.overall_aqi;
	})
	.catch(err=>console.error(err));



// Ghaziabad

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ghaziabad' , weather)
		.then(response => response.json())
		.then(response => {
			console.log(response);
			
			gt.innerHTML = response.temp;
			gh.innerHTML = response.humidity;
			gmi.innerHTML = response.min_temp;
			gma.innerHTML = response.max_temp;
			gw.innerHTML = response.wind_speed;
		})
	.catch(err => console.error(err));

	fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Ghaziabad'  , aqi)
	.then(response=>response.json())
	.then(response => {
		console.log(response)
		ga.innerHTML = response.overall_aqi;
	})
	.catch(err=>console.error(err));



// Lucknow

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow' , weather)
		.then(response => response.json())
		.then(response => {
			console.log(response);
			
			lt.innerHTML = response.temp;
			lh.innerHTML = response.humidity;
			lmi.innerHTML = response.min_temp;
			lma.innerHTML = response.max_temp;
			lw.innerHTML = response.wind_speed;
		})
	.catch(err => console.error(err));


	fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Lucknow'  , aqi)
	.then(response=>response.json())
	.then(response => {
		console.log(response)
		la.innerHTML = response.overall_aqi;
	})
	.catch(err=>console.error(err));




	// Bihar

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bihar' , weather)
		.then(response => response.json())
		.then(response => {
			console.log(response);
			
			bt.innerHTML = response.temp;
			bh.innerHTML = response.humidity;
			bmi.innerHTML = response.min_temp;
			bma.innerHTML = response.max_temp;
			bw.innerHTML = response.wind_speed;
		})
	.catch(err => console.error(err));

	fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Bihar'  , aqi)
	.then(response=>response.json())
	.then(response => {
		console.log(response)
		ba.innerHTML = response.overall_aqi;
	})
	.catch(err=>console.error(err));
	



// Noida

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Noida' , weather)
		.then(response => response.json())
		.then(response => {
			console.log(response);
			
			nt.innerHTML = response.temp;
			nh.innerHTML = response.humidity;
			nmi.innerHTML = response.min_temp;
			nma.innerHTML = response.max_temp;
			nw.innerHTML = response.wind_speed;
		})
	.catch(err => console.error(err));

	fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Noida'  , aqi)
	.then(response=>response.json())
	.then(response => {
		console.log(response)
		na.innerHTML = response.overall_aqi;
	})
	.catch(err=>console.error(err));



// Manali

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Manali' , weather)
		.then(response => response.json())
		.then(response => {
			console.log(response);
			
			mt.innerHTML = response.temp;
			mh.innerHTML = response.humidity;
			mmi.innerHTML = response.min_temp;
			mma.innerHTML = response.max_temp;
			mw.innerHTML = response.wind_speed;
		})
	.catch(err => console.error(err));

	fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Manali'  , aqi)
	.then(response=>response.json())
	.then(response => {
		console.log(response)
		ma.innerHTML = response.overall_aqi;
	})
	.catch(err=>console.error(err));



}



getWeather("Delhi");
getAqi("Delhi");
getTopCities();


// weather

search.addEventListener("click",function(e){
	e.preventDefault()
	getWeather(city.value);
	getAqi(city.value);
	getTopCities();
});



// aqi

search.addEventListener("click",function(e){
	e.preventDefault()
	getWeather(city.value);
	getAqi(city.value);
	getTopCities();
});
















// const options1 = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1940e9d7f3msh55a1ca12da62509p13bb6ajsn649fb822f481',
// 		'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
// 	}
// };

// fetch('https://foreca-weather.p.rapidapi.com/location/search/delhi?lang=en&country=in', options1)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));





// function getTopCitiesAqi(city){
// 	fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city , options2)
// 	.then(response=>response.json())
// 	.then(response => {

// 		console.log(response)
// 		da.innerHTML = response.overall_aqi;
// 	})
// 	.catch(err=>console.error(err));
// }