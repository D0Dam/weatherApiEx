const setCity = (e) => {
	getWeatherInfo(e.target.className);
	console.log(e.target.className);
};
const getWeatherInfo = (city) => {
	axios
		.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0be87df02cd14b1d08489cd0372b5b0e`
		)
		.then((res) => {
			const weatherIcon = res.data.weather[0].icon;
			const weatherDes = res.data.weather[0].description;
			const cityTemp = res.data.main.temp;
			document.getElementById(
				"weather-Icon"
			).src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
			document.getElementById("weather-Des").innerText = "날씨 : " + weatherDes;
			document.getElementById("weather-Temp").innerText =
				"온도(섭씨) : " + Math.round(cityTemp - 273) + "도";
		});
};
getWeatherInfo("Seoul");
document.getElementById("seoul-Button").addEventListener("click", setCity);
document.getElementById("london-Button").addEventListener("click", setCity);
document.getElementById("tokyo-Button").addEventListener("click", setCity);
document.getElementById("paris-Button").addEventListener("click", setCity);
