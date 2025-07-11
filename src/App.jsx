import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./contact";
import AnimalTreatments from "./services/animal-treatment";
import DrugsSection from "./services/drug-section";
import PetAccessories from "./services/pet-accessories";
import DogRetainership from "./services/dog-care";
import Consultancy from "./services/consultancy";
import ChickBookings from "./services/chick-bookings";
import Agrochemicals from "./services/agrochemicals";
import FrequentlyAskedQuestions from "./faq";
import ScrollToTop from "./scroll";
import LandingPage from "./home";




const App = () => {
  return ( 
    <div>
      <Router> 
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

          {/*Services Links*/}
          <Route path="/animal-treatments" element={<AnimalTreatments />}></Route>
          <Route path="/drug-section" element={<DrugsSection />}></Route>
          <Route path="/pet-accessories" element={<PetAccessories />}></Route>
          <Route path="/dog-care" element={<DogRetainership />}></Route>
          <Route path="/consultancy" element={<Consultancy />}></Route>
          <Route path="/chick-booking" element={<ChickBookings />}></Route>
          <Route path="/agrochemicals" element={<Agrochemicals />}></Route>
          <Route path="/faq" element={<FrequentlyAskedQuestions />}></Route>
        </Routes>
      </Router>
    </div>
   );
}
 
export default App;