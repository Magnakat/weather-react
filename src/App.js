import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
       <div className="container">
        
      < Weather defaultCity="Harare"/>
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