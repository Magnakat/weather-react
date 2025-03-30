import "./App.css";

export default function App() {
  return (
    <div className="App">
       <div class="container">
      <div class="input-group mb-3">
        <form class="search" id="search">
          <input
            type="search"
            placeholder="Enter a City"
            autofocus="on"
            autocomplete="off"
            id="input-city"
            class="form-control shadow-sm"
          />

          <button type="submit" class="bsearch">Search</button>
        </form>
      </div>
      <h1 id="chosen-city">Harare</h1>
      <h3 id="date-today"></h3>
      <h2>
        🌤 <span class="temperature" id="temperature">27</span
        ><span class="units">
          <a href="#" id="celsius-link">°C</a> |
          <a href="#" id="fahrenheit-link">°F</a></span
        >
      </h2>
      <h3 class="today" id="description">Partly Sunny</h3>
      <div class="row row-cols-1 row-cols-md-2 g-4 card-group">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Wind (km/h)</h5>
              <p class="card-text" id="wind">7</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Humidity</h5>
              <p class="card-text" id="humidity">30</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Feels Like</h5>
              <p class="card-text" id="feels_like">27°C</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Pressure</h5>
              <p class="card-text" id="pressure">8°</p>
            </div>
          </div>
        </div>
      </div>
      <div class="info">
        <div class="container1 text-center">
          <div class="row align-items-end">
            <div class="col">Mon</div>
            <div class="col">Tue</div>
            <div class="col">Wed</div>
            <div class="col">Thur</div>
            <div class="col">Fri</div>
            <div class="col">Sat</div>
          </div>
        </div>

        <div class="container1 text-center">
          <div class="row align-items-end">
            <div class="col">⛅</div>
            <div class="col">🌦</div>
            <div class="col">🌧</div>
            <div class="col">🌨</div>
            <div class="col">🌩</div>
            <div class="col">⛈</div>
          </div>
        </div>
        <div class="container1 text-center">
          <div class="row align-items-end">
            <div class="col">25°</div>
            <div class="col">20°</div>
            <div class="col">15°</div>
            <div class="col">14°</div>
            <div class="col">12°</div>
            <div class="col">10°</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      This project was coded by <a href="https://www.linkedin.com/in/magna-katiyo-2a2b5a1b8/"
        >Magna Katiyo </a > 
        and is {" "}
      <a href="https://github.com/Magnakat/weather-react"
        >Open-sourced on GitHub</a
      >
    </div>
    </div>
  );
}