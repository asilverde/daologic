import Navbar from "./components/navbar/Navbar.jsx"
import Banner from "./components/banner/Banner.jsx"
import Home from "./components/home/Home.jsx"
import About from "./components/about/About.jsx"
import Services from "./components/services/Services.jsx"
import "./App.scss"


function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="info-section">
        <Banner/>
        <Home/>
        <About/>
        <Services/>
      </div>
    </div>
  );
}

export default App;
