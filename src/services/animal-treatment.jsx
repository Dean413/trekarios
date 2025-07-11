import Header from "../header";
import Footer from "../footer";
import pigletSurgery from "../assets/hernia-repair.jpg";
import dogCastration from "../assets/dog-castration.jpg";
import mastitisTreatment from "../assets/ascites.jpg";
import earStitching from "../assets/stitching-a-dog-ear.jpg";
import dogReceivingDrip from "../assets/dog-receiving-drip.jpg";
import woundStitching from "../assets/wound-stitching.jpg";
import DogSurgery from "../video";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const AnimalTreatments = () => {
    const ref = useRef(null);
      const isInView = useInView(ref, { once: true });
    
      const variants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.4,
          },
        },
      };
    
      const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };
    return (
        <motion.main variants={variants} initial="hidden" animate="visible" className= "bg-gray-50 ">
            <div className="min-h-screen">
                <Header />
                
                {/* Hero Section */}
                <div className="relative">
                    <DogSurgery />
                    <div className="absolute inset-0 backdrop-blur-[4px]"></div>
                    <div className="absolute inset-0 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white ml-2 sm:ml-4 md:ml-8 flex items-center justify-center px-4 text-center">
                        <motion.p variants={paragraphVariants}>Animal Treatments & Surgery</motion.p>
                    </div>
                </div>

                {/* Intro Section */}
                <motion.section variants={paragraphVariants} className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto mt-8 space-y-4 animate-fade-in text-sm sm:text-base md:text-lg">
                    <p>
                        At Trekarios Veterinary Clinic & Pharmacy, we understand that the health and well-being of your pets and livestock are your top priorities.
                        We provide a comprehensive range of treatments and surgical services to ensure that your animals receive the best care possible.
                    </p>

                    <p>
                        Whether it's routine care or emergency treatment, our clinic offers a variety of services to keep your animals healthy.
                        From preventive care such as vaccinations and parasite control, to complex treatments for illnesses and injuries — we’ve got it covered.
                    </p>
                </motion.section>

                {/* Service Details */}
                <section className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto mt-10 animate-fade-in">
                    <motion.h1 variants={paragraphVariants} className="text-xl sm:text-2xl md:text-3xl text-trek1 text-center mb-6 font-bold">What We Offer</motion.h1>

                    <div className="space-y-6 text-sm sm:text-base md:text-lg">
                        <motion.div variants={paragraphVariants}>
                            <h3 className="font-semibold text-lg sm:text-xl">General Health Checkups</h3>
                            <p>We offer physical exams to detect early signs of disease, monitor health, and provide preventive care advice.</p>
                        </motion.div>

                        <motion.div variants={paragraphVariants}>
                            <h3 className="font-semibold text-lg sm:text-xl">Medical Treatments</h3>
                            <p>We treat both common and complex conditions, including:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Parasitic Infections</li>
                                <li>Skin Disorders</li>
                                <li>Respiratory & Gastrointestinal Issues</li>
                                <li>Infectious Diseases</li>
                                <li>Tick Infestations</li>
                            </ul>
                        </motion.div>

                        <motion.div variants={paragraphVariants}>
                            <h3 className="font-semibold text-lg sm:text-xl">Minor & Major Surgeries</h3>
                            <p>We perform safe and modern surgical procedures like:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Wound Stitching & Treatment</li>
                                <li>Castration</li>
                                <li>C-Section</li>
                                <li>Hernia Repair</li>
                                <li>Post-Mortem</li>
                            </ul>
                        </motion.div>

                        <motion.div variants={paragraphVariants}>
                            <h3 className="font-semibold text-lg sm:text-xl">Emergency Care</h3>
                            <p>Urgent and time-sensitive injuries or illnesses are treated with priority to stabilize your animal quickly.</p>
                        </motion.div>

                        <motion.div variants={paragraphVariants}>
                            <h3 className="font-semibold text-lg sm:text-xl">Post-Operative Recovery</h3>
                            <p>We ensure the best pain management and wound care after any surgical intervention.</p>
                        </motion.div>

                        <motion.div variants={paragraphVariants}>
                            <h3 className="font-semibold text-lg sm:text-xl">Livestock Surgery</h3>
                            <p>We treat farm animals with services such as dehorning, debeaking, castration, hernia repair, and abscess drainage.</p>
                        </motion.div>
                    </div>

                    <p className="my-6 text-center text-red-500 font-semibold text-base sm:text-lg">Here are some images of our treatments & surgeries:</p>
                </section>

                {/* Image Grid */}
                <section className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto pb-8 animate-fade-in-up">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            { src: woundStitching, label: "Wound Stitching" },
                            { src: pigletSurgery, label: "Hernia Repair in a Piglet" },
                            { src: mastitisTreatment, label: "Ascites Treatment" },
                            { src: earStitching, label: "Treatment of Aural Hematoma" },
                            { src: dogReceivingDrip, label: "Dog Receiving Drip" },
                            { src: dogCastration, label: "Castration of a Dog" }
                        ].map(({ src, label }, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                            >
                                <img
                                    src={src}
                                    loading="lazy"
                                    alt={label}
                                    className="rounded-xl h-60 sm:h-72 md:h-80 w-full object-cover"
                                />
                                <h3 className="text-lg sm:text-xl font-semibold text-red-500 text-center mt-4">{label}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="my-8 px-4 sm:px-8 md:px-16 animate-fade-in">
                    <h1 className="text-xl sm:text-2xl text-red-500 mb-4 font-bold">Why Choose Trekarios?</h1>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
                        <li>Experienced veterinary professionals</li>
                        <li>Clean, well-equipped surgical environment</li>
                        <li>Emphasis on compassionate care</li>
                        <li>Affordable, transparent pricing</li>
                    </ul>
                </section>
            </div>

            <Footer />
        </motion.main>
    );
};

export default AnimalTreatments;
