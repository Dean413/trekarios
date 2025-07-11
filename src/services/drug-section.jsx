import { motion } from "framer-motion";
import { FaCapsules, FaVial, FaSyringe, FaTint, FaBoxOpen } from "react-icons/fa";
import Navbar from "../header";
import Footer from "../footer";
import vaccines from "../assets/vaccines.jpg"
import tetranor from "../assets/tetranor.jpg"
import ivanor from "../assets/ivanor.jpg"
import multinor from "../assets/v.multinor.jpg"
import deworm from "../assets/deworm.jpg"
import multivytes from "../assets/multivytes.jpg"
import kachgendox from "../assets/kachgendox.jpg"
import antiCocci from "../assets/Anti-cocci.jpg"
import multivitaminTonic from "../assets/tonic.jpg"
import saltLick from "../assets/salt-lick.jpg"
import drinkerFeeders from "../assets/drinkers.jpg"
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DrugSection = () => {
  return (
    <main>
      <Navbar />
      <section className="py-16 px-4 bg-white text-gray-800">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-trek1"
          >
            Veterinary Drugs & Supplies
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-10 text-gray-600"
          >
            We provide essential veterinary medications and farm tools to help you care for your
            animals. From antibiotics to feeders — everything your livestock needs to thrive.
          </motion.p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    
          <motion.div onClick={() => {const el = document.getElementById("poultry-vaccines"); el && el.scrollIntoView({ behavior: "smooth" });}}
              className="bg-hbg p-6 rounded-lg shadow-md text-white  hover:shadow-xl block cursor-pointer">
              <div className="mb-4"><FaVial className="text-trek1 text-3xl" /></div>
              <h3 className="text-xl font-semibold mb-2">Poultry Vaccines</h3>
              <p>Prevent outbreaks and keep your birds healthy with our vaccine options.</p>
          </motion.div>

          <motion.div onClick={() => {const el = document.getElementById("poultry-drugs"); el && el.scrollIntoView({ behavior: "smooth" });}}
              className="bg-hbg p-6 rounded-lg shadow-md text-white  hover:shadow-xl block cursor-pointer">
              <div className="mb-4"><FaCapsules className="text-trek1 text-3xl" /></div>
              <h3 className="text-xl font-semibold mb-2">Poultry Drugs</h3>
              <p>we stock trusted medications for various poultry diseases</p>
          </motion.div>

          <motion.div onClick={() => {const el = document.getElementById("salt-licks"); el && el.scrollIntoView({ behavior: "smooth" });}}
              className="bg-hbg p-6 rounded-lg shadow-md text-white  hover:shadow-xl block cursor-pointer">
              <div className="mb-4"><FaTint className="text-trek1 text-3xl" /></div>
              <h3 className="text-xl font-semibold mb-2">Salt Licks</h3>
              <p>Essential mineral blocks to improve appetite and boost productivity.</p>
          </motion.div>

          <motion.div onClick={() => {const el = document.getElementById("drinkers-feeders"); el && el.scrollIntoView({ behavior: "smooth" });}}
              className="bg-hbg p-6 rounded-lg shadow-md text-white  hover:shadow-xl block cursor-pointer">
              <div className="mb-4"><FaBoxOpen className="text-trek1 text-3xl" /></div>
              <h3 className="text-xl font-semibold mb-2">Drinkers & Feeders</h3>
              <p>Durable tools to help you manage feeding and hydration easily.</p>
          </motion.div>

          <motion.div onClick={() => {const el = document.getElementById("injectibles"); el && el.scrollIntoView({ behavior: "smooth" });}}
              className="bg-hbg p-6 rounded-lg shadow-md text-white  hover:shadow-xl block cursor-pointer">
              <div className="mb-4"><FaSyringe className="text-trek1 text-3xl" /></div>
              <h3 className="text-xl font-semibold mb-2">Injectibles</h3>
              <p>Various injections for your large animals.</p>
          </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Image Sections */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto grid gap-12">
          <div id="poultry-vaccines" className="flex flex-col items-center text-center">
            <img src={vaccines} alt="Poultry Vaccines" className="w-full h-120 object-cover max-w-md rounded-lg shadow-md mb-4" />
            <h4 className="text-xl font-semibold text-trek1">3 in 1, Lasota, Gumboro Vaccines etc</h4>
            <p className="text-gray-700">Prevent outbreaks and keep your livestocks/pets healthy with our vaccine options.</p>
          </div>

          <div id="poultry-drugs" className="grid items-center text-center lg:grid-cols-5 md:grid-cols-2 gap-3">
            <div className="bg-white rounded-2xl shadow-md p-4 md:p-5 hover:shadow-lg transition-all duration-300"><img src={deworm} alt="Dewormers" className="w-full max-w-md rounded-lg shadow-md mb-4" /><h1 className="text-sm sm:text-xl font-semibold text-red-500 mt-4 text-center lg:text-sm">Dewormers</h1></div>
            <div className="bg-white rounded-2xl md:h-full shadow-md p-4 md:p-5 hover:shadow-lg transition-all duration-300"><img src={multivytes} alt="multivitamins/calcium" className="w-full max-w-md rounded-lg shadow-md mb-4" /><h1 className="text-lg lg:text-sm sm:text-xl font-semibold text-red-500 mt-4 text-center">Multivitamins & Calcium Suspension</h1></div>
            <div className="bg-white rounded-2xl shadow-md p-4 md:p-5 hover:shadow-lg transition-all duration-300"><img src={kachgendox} alt="Antibiotics" className="w-full max-w-md rounded-lg shadow-md mb-4" /><h1 className="text-lg sm:text-xl font-semibold lg:text-sm text-red-500 mt-4 text-center">Antibiotics</h1></div>
            <div className="bg-white rounded-2xl shadow-md p-4 md:p-5 hover:shadow-lg transition-all duration-300"><img src={antiCocci} alt="Anti-Cocci" className="w-full max-w-md rounded-lg shadow-md mb-4" /><h1 className="text-lg lg:text-sm sm:text-xl font-semibold text-red-500 mt-4 text-center">Anti-Cocci</h1></div>
            <div className="bg-white rounded-2xl shadow-md p-4 md:p-5 hover:shadow-lg transition-all duration-300"><img src={multivitaminTonic} alt="multivitamin Tonics" className="w-full max-w-md rounded-lg shadow-md mb-4" /><h1 className="text-lg lg:text-sm sm:text-xl font-semibold text-red-500 mt-4 text-center">Multivitamin Tonic</h1></div>
            
          </div>

          <div id="salt-licks" className="flex flex-col items-center text-center">
            <img src={saltLick} alt="Salt Licks" className="w-full max-w-md rounded-lg shadow-md mb-4" />
            <h4 className="text-xl font-semibold text-trek1">Salt Licks</h4>
            <p className="text-gray-700">Essential mineral blocks to improve appetite and boost productivity.</p>
          </div>

          <div id="drinkers-feeders" className="flex flex-col items-center text-center m-auto ">
            <img src={drinkerFeeders} alt="Drinkers & Feeders" className="w-full h-[420px] object-cover max-w-md rounded-lg shadow-md mb-4" />
            <h4 className="text-xl font-semibold text-trek1">Drinkers & Feeders</h4>
            <p className="text-gray-700">Durable tools to help you manage feeding and hydration easily.</p>
          </div>

          <div id="injectibles" className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 items-center text-center">
            <div className="bg-white rounded-2xl shadow-md p-4 md:p-5 hover:shadow-lg transition-all duration-300"><img src={tetranor} alt="tetranor" className="w-full object-cover h-full max-w-md rounded-lg shadow-md mb-4" /><h1 className="text-lg sm:text-xl font-semibold text-red-500 mt-4 text-center">Antibiotics</h1></div>
            <div className="bg-white rounded-2xl shadow-md p-4 md:p-5 hover:shadow-lg transition-all duration-300"><img src={ivanor} alt="ivanor" className="w-full object-cover h-full max-w-md rounded-lg shadow-md mb-4" /><h1 className="text-lg sm:text-xl font-semibold text-red-500 mt-4 text-center">Dewormer/De-lice</h1></div>
            <div className="bg-white rounded-2xl shadow-md p-4 md:p-5 hover:shadow-lg transition-all duration-300"><img src={multinor} alt="ivanor" className="w-full object-cover h-full max-w-md rounded-lg shadow-md mb-4" /><h1 className="text-lg sm:text-xl font-semibold text-red-500 mt-4 text-center">Multivitamins</h1></div>
           
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DrugSection;
