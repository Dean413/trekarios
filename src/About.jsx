import Footer from "./footer";
import Header from "./header";
import drugs from "./assets/Animal-drugs.jpg";
import retainerShip from "./assets/retainership.jpg";
import dogDrip from "./assets/dog-receiving-drip.jpg";
import manager from "./assets/manager.jpg";
import petItems from "./assets/dog-collars.jpg";
import chicks from "./assets/day-old-chick.jpg";
import chemicals from "./assets/agro-chemicals.jpg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const consultancy = "https://th.bing.com/th/id/OIP.Q2EnaRr9nORxJKjwyRSlDgHaE8?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"

const About = () => {
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
    <motion.main
      className="bg-gray-50"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <Header />

      <div className="min-h-screen">
        <main>
          {/* Hero Section */}
          <header className="bg-[url(./assets/question-tag.jpg)] h-40 bg-cover relative">
            <motion.div variants={paragraphVariants} className="relative">
              <h1 className="absolute top-14 left-4 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                ABOUT US
              </h1>
            </motion.div>
          </header>

          {/* Intro Paragraph */}
          <motion.p
            variants={paragraphVariants}
            className="mt-6 px-4 sm:px-6 md:px-10 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            Founded in 2019, Trekarios Veterinary Clinic & Pharmacy has been
            committed to providing exceptional veterinary care and high quality
            medications for pets and livestock. Our mission is to promote
            animal health through expert veterinary services, reliable
            pharmaceuticals, and professional pet care advice. With our
            experienced veterinary doctor, we offer a wide range of services,
            including routine check-ups, vaccinations, disease diagnosis, and
            treatment. Our pharmacy is well stocked with essential medications,
            supplements, and pet care products to support the health and
            well-being of your animals. At Trekarios Veterinary Clinic &
            Pharmacy, your animal welfare is our concern, we believe that every
            animal deserves the best care. Whether you are a pet owner seeking
            quality veterinary services or a livestock farmer in need of
            trusted medical supplies, we are here to serve you with compassion
            and expertise.
          </motion.p>

          {/* Services List */}
          <motion.section variants={paragraphVariants} className="mt-6">
            <h1 className="text-trek1 text-3xl sm:text-4xl text-center mb-4">
              Our Services
            </h1>
            <ul className="ml-6 sm:ml-10 text-sm sm:text-base list-disc">
              <li className="mb-2">Sales of Chicken Food</li>
              <li className="mb-2">Debeaking of Layers</li>
              <li className="mb-2">Farm/Home Visitation</li>
              <li className="mb-2">Tail Cropping</li>
              <li className="mb-2">General Veterinary Consultancy</li>
              <li className="mb-2">Rabies Vaccination</li>
              <li className="mb-2">Layer Vaccination</li>
            </ul>
          </motion.section>

          {/* Meet the Founder */}
          <motion.section variants={paragraphVariants} className="mt-8">
            <h1 className="text-3xl sm:text-4xl text-center text-trek1 mb-4">
              Meet the Founder
            </h1>
            <div className="w-[95%] m-auto text-sm sm:text-base space-y-4">
              <p>
                Dr. Bolaji Stephen Kayode is the visionary behind Trekarios
                Veterinary Clinic & Pharmacy. With a deep passion for animal
                health and years of experience in veterinary medicine, he
                established the clinic to bridge the gap in professional pet and
                livestock care.
              </p>
              <p>
                Dr. Kayode earned a Doctor of Veterinary Medicine degree from
                the{" "}
                <strong>Federal University of Agriculture, Abeokuta</strong> in
                2011.
              </p>
            </div>
          </motion.section>

          {/* Meet the Manager */}
          <section className="mt-10">
            <motion.h1
              variants={paragraphVariants}
              className="text-3xl sm:text-4xl text-center text-trek1 mb-6"
            >
              Meet the Manager
            </motion.h1>
            <div className="w-[95%] m-auto flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <motion.div>
                  <img
                    src={manager}
                    alt="Manager"
                    className="object-cover w-full rounded-xl"
                    loading="lazy"
                  />
                </motion.div>
              </div>
              <div className="md:w-1/2 space-y-4 text-sm sm:text-base lg:mt-35">
                <motion.p
                  variants={paragraphVariants}
                  ref={ref}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  Mrs. Bolaji is a graduate of{" "}
                  <strong>University of Ilorin</strong>. As the manager of
                  Trekarios Veterinary Clinic & Pharmacy, she ensures the smooth
                  operation of the clinic and pharmacy. With a strong passion
                  for animal care and business management, she coordinates staff
                  and maintains high service standards.
                </motion.p>

                <motion.p
                  variants={paragraphVariants}
                  ref={ref}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  Her dedication helps ensure client satisfaction and efficient
                  stock management. Whether it's overseeing appointments,
                  maintaining inventory, or supporting pet owners, she plays a
                  crucial role in Trekarios' success.
                </motion.p>

                <motion.p
                  className="p-styles"
                  variants={paragraphVariants}
                  ref={ref}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  Her commitment to customer service and clinic operations makes
                  Trekarios a trusted partner in animal health.
                </motion.p>
              </div>
            </div>
          </section>

          {/* What We Do Cards */}
          <section className="my-12">
            <h1 className="text-trek1 text-2xl sm:text-3xl text-center mb-6">
              WHAT WE DO?
            </h1>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-[95%] m-auto"
              variants={paragraphVariants}
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Repeatable Service Cards */}
              <Link to="/animal-treatments" className="block">
                <div className="bg-white rounded-2xl shadow-md p-4 md:p-5 hover:shadow-lg transition-all duration-300">
                  <LazyLoadImage
                    effect="opacity"
                    src={dogDrip}
                    className="w-full rounded-2xl object-cover"
                    alt="dog treatment"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-red-500 mt-4 text-center">
                    Animal Treatments & Surgery
                  </h3>
                </div>
              </Link>

              <Link to="/drug-section" className="block">
                <div className="bg-white rounded-2xl shadow-md p-4 w- md:p-5">
                  <LazyLoadImage
                    effect="opacity"
                    src={drugs}
                    className="w-full rounded-2xl object-cover"
                    alt="veterinary drugs"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-red-500 mt-4 text-center">
                    Veterinary Drugs & Supplies
                  </h3>
                </div>
              </Link>

              <Link to="/pet-accessories" className="block">
                <div className="bg-white rounded-2xl shadow-md  p-4 md:p-5">
                  <LazyLoadImage
                    effect="opacity"
                    src={petItems}
                    className="w-full rounded-2xl object-cover"
                    alt="pet accessories"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-red-500 mt-4 text-center">
                    Pet Accessories & Dog Food
                  </h3>
                </div>
              </Link>

              <Link to="/dog-care" className="block">
                <div className="bg-white rounded-2xl shadow-md p-4 md:p-5">
                  <LazyLoadImage
                    effect="opacity"
                    src={retainerShip}
                    className="w-full rounded-2xl object-cover"
                    alt="dog retainership"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-red-500 mt-4 text-center">
                    Dog Retainership & Boarding Services
                  </h3>
                </div>
              </Link>

              <Link to="/chick-booking" className="block">
                <div className="bg-white rounded-2xl shadow-md p-4 md:p-5">
                  <LazyLoadImage
                    effect="opacity"
                    src={chicks}
                    className="w-full rounded-2xl object-cover"
                    alt="day old chicks"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-red-500 mt-4 text-center">
                    Day-Old Chick Booking
                  </h3>
                </div>
              </Link>

              <Link to="/agrochemicals" className="block">
                <div className="bg-white rounded-2xl  shadow-md p-4 md:p-5">
                  <LazyLoadImage
                    effect="opacity"
                    src={chemicals}
                    className="w-full rounded-2xl object-cover"
                    alt="agrochemicals"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-red-500 mt-4 text-center">
                    Agro-Chemicals & Inputs
                  </h3>
                </div>
              </Link>

              <Link to="/consultancy" className="block">
                <div className="bg-white rounded-2xl shadow-md p-4 md:p-5 w-100">
                  <LazyLoadImage
                    effect="opacity"
                    src={consultancy}
                    className="w-full rounded-2xl object-cover"
                    alt="veterinary consultancy"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-red-500 mt-4 text-center">
                    General Veterinary Consultancy
                  </h3>
                </div>
              </Link>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </motion.main>
  );
};

export default About;
