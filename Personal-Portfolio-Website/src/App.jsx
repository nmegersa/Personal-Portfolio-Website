import "./App.css"
import { LoadingScreen } from "./Components/LoadingScreen.jsx";
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import "./index.css"
import { useState } from "react";
import { Navbar } from "./Components/Navbar.jsx";
import { MobileMenu } from "./Components/MobileMenu.jsx";
import { Home } from "./Components/Sections/Home.jsx";
import { About } from "./Components/Sections/About.jsx";
import { Projects } from "./Components/Sections/Projects.jsx"
import { Contacts } from "./Components/Sections/Contacts.jsx";
import { SongOfTheDay } from "./Components/Sections/SongOfTheDay.jsx";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700
      ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>


        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contacts />
        <SongOfTheDay />
      </div>
    </>
  );
}


export default App
