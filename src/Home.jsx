import Footer from "./footer";
import Header from "./header";
import bgImage from "./assets/landing-page-background.jpg"; 
import { motion } from "framer-motion";
import WelcomeTypewriter from "./typewriter";
import { Typewriter } from "react-simple-typewriter";

const LandingPage = () => {
  return (
    
    <div className="relative z-0">
      <Header />
      {/* HERO SECTION */}
      <div style={{ backgroundImage: `url(${bgImage})` }} className="bg-no-repeat bg-cover bg-center h-150 flex items-center relative z-0 lg:h-screen">
        <div className="bg-white/15 inset-0 absolute"></div>
            <main className="w-full px-6 md:px-16">
                <div className="max-w-3xl z-10 relative h-full">
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-red-500 text-3xl md:text-4xl font-bold leading-tight">
                        <Typewriter
                                            words={[
                                            "Welcome To Trekarios Veterinary Clinic and Pharmacy "
                                            ]}
                                            loop={1}
                                            cursorStyle="|"
                                            typeSpeed={40}
                                            deleteSpeed={0}
                                            delaySpeed={1000}
                                            />
                    </motion.h1>
                        
                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }} className="text-white mt-4 text-lg text-justify">
                       <WelcomeTypewriter />
                    </motion.p>

                        {/* Book Appointment Button */}
                    <motion.div initial={{ opacity: 0, y: 30 }}  animate={{ opacity: 1, y: 0 }} transition={{ delay: 13, duration: 1 }} className="bg-trek1 w-[90%] px-6 py-3 rounded-lg mt-6 m-auto">
                        <a href="https://wa.me/2348035907335?text=Hello%20there!%20I'm%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="block text-white font-medium  text-center">  Book an Appointment
                        </a>
                    </motion.div>
                </div>
            </main>     
        </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
