const daysOfWeekMap = {
  0: "SUN",
  1: "MON",
  2: "TUES",
  3: "WED",
  4: "THUR",
  5: "FRI",
  6: "SAT",
};

let today = new Date().toDateString().split(" ")[0].toUpperCase();
console.log(today);

let dateIndex;

function getDateIndex() {
  for (let i = 0; i < 7; i++) {
    if (daysOfWeekMap[i] === today) {
      dateIndex = i;
    }
  }
}
getDateIndex();

const iconNameToSizeMap = {
  cloudy: { width: 264, height: 166 },
  sunny: { width: 208, height: 213 },
  stormy: { width: 246, height: 187 },
  snowy: { width: 230, height: 196 },
  "partly-cloudy": { width: 230, height: 209 },
  rainy: { width: 160, height: 222 },
};

let wrapper = document.querySelector(".wrapper");

const key = "878915e00b1244049e124502222302";
const baseURL = "https://api.weatherapi.com/v1/forecast.json?key=";
const details = "&q=Toronto&days=7";

function getWeather() {
  console.log(`${baseURL}${key}${details}`);
  fetch(`${baseURL}${key}${details}`)
    .then((response) => response.json())
    .then((data) => renderData(data.forecast.forecastday));
}

function renderData(data) {
  wrapper.innerHTML = "";
  let frag = document.createDocumentFragment();

  console.log(data);
  for (const [index, day] of data.entries()) {
    const date = day.date.split("-")[2];
    const temp = day.day.avgtemp_c;
    let condition;

    switch (day.day.condition.text) {
      case "Overcast":
        condition = "Cloudy";
        break;
      case "Sunny":
        condition = "Sunny";
        break;
      case "Heavy snow":
      case "Moderate or heavy snow showers":
        condition = "Snowy";
        break;
      case "Partly cloudy":
        condition = "partly-cloudy";
        break;
    }
    const precip = day.day.daily_chance_of_snow;
    const minTemp = day.day.mintemp_c;
    console.log(date, temp, condition, precip, minTemp);

    let entry = document.createElement("div");
    entry.classList.add("day");
    entry.innerHTML = `
    <div class="day">
      <div class="day-of-week">${daysOfWeekMap[dateIndex + index]}</div>
      <div class="date">${date}</div>

      <div class="bar ${condition.toLowerCase()}">
        <div class="weather">
          <svg role="img" width="246" height="187" viewBox="0 0 246 187">
            <use xlink:href="#${condition.toLowerCase()}"></use>
          </svg>
        </div>
        <div class="temperature">
          ${temp}<span class="degrees">&deg;</span>
        </div>
        <div class="content">
          <div class="precipitation">
            <svg role="img" class="icon">
              <use xlink:href="#precipitation"></use>
            </svg>
            ${precip}%
          </div>
          <div class="low">
            <svg role="img" class="icon">
              <use xlink:href="#low"></use>
            </svg>
            ${minTemp}&deg;
          </div>
        </div>
      </div>
    </div>`;
    frag.appendChild(entry);
  }
  wrapper.appendChild(frag);
}

getWeather();
