//Base URL for the Sunrise Sunset API
const baseUrl = 'https://api.sunrisesunset.io/json';
//Get references to DOM elements
const select = document.getElementById('location');
const button = document.getElementById('getData');
const errorDiv = document.getElementById('error');
button.addEventListener('click', () => {
  const [lat, lng] = select.value.split(',');
  fetchData(lat, lng, 'today');
  fetchData(lat, lng, 'tomorrow');
});
async function fetchData(lat, lng, dateType) {
  try {
    //Make API request
    const response = await fetch(`${baseUrl}?lat=${lat}&lng=${lng}&date=${dateType}`);
    const data = await response.json();
    if (data.status !== 'OK') throw new Error('Bad response');
    updateDashboard(data.results, dateType);
    errorDiv.classList.add('hidden');
  } catch (error) {
    //Show error message if the API call fails
    errorDiv.textContent = `Error fetching data: ${error.message}`;
    errorDiv.classList.remove('hidden');
  }
} 
//update dashboard with retrieved data
function updateDashboard(results, prefix) {
  document.getElementById(`${prefix}-sunrise`).textContent = `Sunrise: ${results.sunrise}`;
  document.getElementById(`${prefix}-sunset`).textContent = `Sunset: ${results.sunset}`;
  document.getElementById(`${prefix}-dawn`).textContent = `Dawn: ${results.dawn}`;
  document.getElementById(`${prefix}-dusk`).textContent = `Dusk: ${results.dusk}`;
  document.getElementById(`${prefix}-day_length`).textContent = `Day Length: ${results.day_length}`;
  document.getElementById(`${prefix}-solar_noon`).textContent = `Solar Noon: ${results.solar_noon}`;
  document.getElementById(`${prefix}-timezone`).textContent = `Time Zone: ${results.timezone}`;
}