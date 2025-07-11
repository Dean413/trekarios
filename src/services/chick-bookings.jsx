import { Link } from "react-router-dom";
import Brooding from "../brooding-video";
import Footer from "../footer";
import Header from "../header";


const ChickBookings = () => {
    return ( 
        <main>
            <div className="mb-6">
                <Header />
                <div className="relative">
                    <div><Brooding /></div>
                    <div className="absolute inset-0  backdrop-blur-[4px]"></div>
                    <div className="absolute inset-0 font-bold  text-2xl text-white flex items-center ml-2 justify-center lg:text-4xl"><p>Day-Old Chick Booking</p></div>
                </div>

                <section>
                    <p>At Trekarios Veterinary clinic and Pharmacy, we take bookings every Monday and Thursday.</p>
                    <p>Chicks booked on Monday arrives on Tuesday, and those booked on Thursday will arrive on Friday. Kindly book early to secure your order </p>
                    
                    <p>click <a className="text-red-500" href="tel: +2348035907335">here</a> to book </p>
                </section>
                
        

                

               
            </div>
            <Footer />
        </main>
     );
}
 
export default ChickBookings;