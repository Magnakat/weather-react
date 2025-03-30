import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
       <div className="container">
        
      < Weather defaultCity="Harare"/>
      <div className="info">
        <div className="container1 text-center">
          <div className="row align-items-end">
            <div className="col">Mon</div>
            <div className="col">Tue</div>
            <div className="col">Wed</div>
            <div className="col">Thur</div>
            <div className="col">Fri</div>
            <div className="col">Sat</div>
          </div>
        </div>

        <div className="container1 text-center">
          <div className="row align-items-end">
            <div className="col">⛅</div>
            <div className="col">🌦</div>
            <div className="col">🌧</div>
            <div className="col">🌨</div>
            <div className="col">🌩</div>
            <div className="col">⛈</div>
          </div>
        </div>
        <div className="container1 text-center">
          <div className="row align-items-end">
            <div className="col">25°</div>
            <div className="col">20°</div>
            <div className="col">15°</div>
            <div className="col">14°</div>
            <div className="col">12°</div>
            <div className="col">10°</div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
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