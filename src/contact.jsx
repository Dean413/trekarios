import Header from "./header";
import Footer from "./footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Mail, MapPin, PhoneCall } from "lucide-react";

const contactImage =
  "https://thumbs.dreamstime.com/b/hand-pressing-key-14724777.jpg";

const Contact = () => {
  return (
    <main>
      <div className="min-h-screen">
        <Header />

        {/* Contact Banner */}
        <section className="relative h-[300px]">
                  <img
                    src={contactImage}
                    alt="General Consultancy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <h1 className="text-4xl font-bold text-white">General Consultancy</h1>
                  </div>
                </section>

        {/* Contact Info Section */}
        <div className="bg-hbg text-white py-6">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <h1 className="text-2xl text-trek1 font-bold">Working Hours</h1>
              <p className="mb-4 text-lg">Monday - Saturday: 8am - 6pm</p>
              <div className="flex items-center text-lg relative">
                <MapPin size={20} className="mr-3 absolute top-2 " />
                <p className="ml-8">
                  Trekarios Veterinary Clinic and Pharmacy Beside Latty Alaaro
                  Block Industry (Power Line Area), Along Afon Road, Ganmo, Ganmo
                  Local Government Area, Ilorin 240101, Kwara
                </p>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center text-lg relative">
                <PhoneCall size={20} className="mr-3 absolute top-1" />
                <p className="ml-8">08035907335, 08138367222</p>
              </div>
            </div>

            <div>
              <div className="flex items-center text-lg relative">
                <Mail size={20} className="mr-3 absolute top-1" />
                <p className="ml-8">bsk4jesus@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="w-full h-[500px] object-cover rounded-t-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.932164999221!2d4.599817275116233!3d8.408323491630304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037b305e24b4b67%3A0xeeddfe49021e76d5!2sTrekarios%20veterinary%20clinic%20and%20pharmacy!5e0!3m2!1sen!2sng!4v1744593330742!5m2!1sen!2sng"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="h-full w-full"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Contact;
