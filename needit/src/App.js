import logo from "./img/NeedIt.gif";
import "./App.css";

// components
import Header from "./components/Header/Header.jsx";
import Carousel from "./components/Carousel/Carousel";
import TestCarousel from "./components/Carousel/TestCarousel/TestCarousel";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="migracode"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
        <Carousel />
        <TestCarousel />
      </header>
      {/* <footer/> */}
    </div>
  );
}

export default App;
