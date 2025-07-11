import {  Mail, Map, MapPin, PhoneIcon } from "lucide-react";
import { FaFacebook, FaRegCopyright, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div className=" bg-hbg text-white font-light py-8">
            <main className="opacity-75 ml-4">
                <section>
                    <h1 className="font-semibold mb-5">SERVICES</h1>
                    <ul className="mb-7">
                        <Link to="/animal-treatments" className="block font-light mb-1">Animal treatments & surgery</Link>
                        <Link to="/drug-section"  className="block font-light mb-1">Sales of Veterinary drugs and poultry vaccines</Link>
                        <Link to="/pet-accessories" className="block font-light mb-1">Pet Accessories & Dog Food</Link>
                        <Link to="/dog-care" className="block font-light mb-1">Dogs Retainership and Boarding Services</Link>
                        <Link to="/chick-booking" className="block font-light mb-1">Day Old Booking</Link>
                        <Link to="/agrochemicals" className="block font-light mb-1">AgroChemicals and Input</Link>
                        <Link to="/consultancy" className="block font-light">General Veterinary Consultancy</Link>
                    </ul>

                </section>

                <section>
                    <Link to="/about" className="font-semibold mb-2 block">ABOUT</Link>
                    <Link to="/faq" className="font-light">FAQs</Link>
                </section>

                {/* contact section */}
                <section className="mt-5 mb-15">
                    <h1 className="mb-3 font-semibold">CONTACT US</h1>
                    <div className="flex relative mb-6"><MapPin size={20} className="absolute top-1" /> <p className="ml-10">Trekarios Veterinary Clinic and Pharmacy Beside Latty Alaaro Block Industry (Power Line Area), Along Afon Road, Ganmo, Ganmo Local Government Area,Ilorin 240101, Kwara</p></div>

                    <div className="flex relative mb-6"><PhoneIcon size={20} className="absolute"/><a href="tel:+2348035907335" className="ml-10">08035907335</a> <a href="tel:+2348138367222">, 08138367222</a></div>
                    <div className="flex relative mb-6"><FaWhatsapp size={20} className="absolute"/><a href="https://wa.me/2348035907335" className="ml-10">08035907335</a></div>
                    <div className="flex relative mb-6"><FaFacebook size={20} className="absolute" /><a href="https://www.facebook.com/trekarios" className="ml-10 ">https://www.facebook.com/trekarios</a></div>
                    <div className="flex relative mb-6"><Mail size={20} className="absolute top-0.5" /><a href="mailto:bsk4jesus@gmail.com" className="ml-10">bsk4jesus@gmail.com</a></div>
                    
                </section>
                <footer >
                    <div className="flex relative"><FaRegCopyright size={12} className="absolute top-1.5" /><p className="ml-4">2025 trekarios.com. All rights reserved</p></div>
                    <p>Designed by: Itunu</p>
                    <p>Developed by: DeanCodes</p>
                </footer>
            </main>
        </div>
     );
}
 
export default Footer;