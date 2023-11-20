

document.getElementById("weatherInfo").addEventListener("click", () => {
  const country = "CHINA";
  const api = "19a8470a463433487b03f8f82158f8e9";

  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      const capital = data[1].capital[0];
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`
      );
    })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "details"
      ).innerHTML = `Capital:  ${data.name},<br> Weather in ${data.name}: ${data.weather[0].main},<br>
       Temp: ${data.main.temp} <br>
        Region: asia `;
    })
    .catch((err) => {
      console.log("Error:", err);
    });
});


document.getElementById("weather").addEventListener("click", () => {
  const country = "INDIA";
  const api = "19a8470a463433487b03f8f82158f8e9";

  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      const capital = data[1].capital[0];
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`
      );
    })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "details"
      ).innerHTML = `Capital:  ${data.name},<br> Weather in ${data.name}: ${data.weather[0].main},<br>
       Temp: ${data.main.temp} <br>
        Region: asia `;
    })
    .catch((err) => {
      console.log("Error:", err);
    });
});

document.getElementById("weatherInformation").addEventListener("click", () => {
  const country = "BANGLADESH";
  const api = "19a8470a463433487b03f8f82158f8e9";

  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      const capital = data[0].capital[0];
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`
      );
    })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "details"
      ).innerHTML = `Capital:  ${data.name},<br> Weather in ${data.name}: ${data.weather[0].main},<br>
       Temp: ${data.main.temp} <br>
        Region: asia `;
    })
    .catch((err) => {
      console.log("Error:", err);
    });
});
/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Inverted_Flag_of_the_People%27s_Republic_of_China.svg/1200px-Inverted_Flag_of_the_People%27s_Republic_of_China.svg.png" width="200"height="150">*/