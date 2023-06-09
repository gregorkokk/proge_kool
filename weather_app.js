const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const weatherInfo = document.getElementById('weather-info');

const apiKey = '9e5abeec2882b0f7a018c01ed3df33b1';

searchBtn.addEventListener('click', () => {
  const city = searchInput.value;
  if (city) {
    fetchWeather(city);
  }
});

async function fetchWeather(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
  const data = await response.json();

  if (data.cod === 200) {
    displayWeather(data);
  } else {
    alert('City not found');
  }
}

function displayWeather(data) {
  const { name, main, weather } = data;
  const temp = main.temp.toFixed(1);
  const description = weather[0].description;

  weatherInfo.innerHTML = `
    <h2>${name}</h2>
    <p>${temp}°C</p>
    <p>${description}</p>
  `;
}
