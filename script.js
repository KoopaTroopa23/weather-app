// Get elements from the page (DOM)
const button = document.getElementById("searchBtn");
const input = document.getElementById("cityInput");

// When button is clicked
button.addEventListener("click", handleSearch);

// Function definition
function handleSearch() {
  const city = input.value.trim();

  // if / else condition
  if (city === "") {
    alert("Please enter a city");
  } else {
    getWeather(city);
  }
}

// Async function to fetch weather data from YOUR backend
async function getWeather(city) {
  try {
    // Call your backend instead of OpenWeather directly
    const url = `http://localhost:3001/weather?city=${city}`;

    const response = await fetch(url);
    const data = await response.json();

    // Check for API errors
    if (data.cod !== 200) {
      document.getElementById("cityName").textContent = "City not found";
      document.getElementById("temp").textContent = "";
      document.getElementById("condition").textContent = "";
      return;
    }

    // DOM updates
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temp").textContent = data.main.temp + "°C";
    document.getElementById("condition").textContent =
      data.weather[0].description;
  } catch (error) {
    console.log("Error fetching weather:", error);
  }
}

/*
FUNCTION:
A function is a block of code that runs when called.
Example: handleSearch()

IF / ELSE:
Used to make decisions based on conditions.
If the input is empty, show an alert.

ASYNC / AWAIT:
Used when working with APIs or data that takes time.
It allows the program to wait for the response before continuing.

DOM (Document Object Model):
This is how JavaScript interacts with HTML.
It allows me to update what the user sees.

getElementById:
This finds an element in the HTML using its ID so I can read or update it.
*/