import Header from "./header";
import Footer from "./footer";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { useState } from "react";


const FrequentlyAskedQuestions = () => {
    const [faq, setFaq] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const toggle = (toggleId) => {
        setFaq(faq === toggleId ? null : toggleId)
        setIsOpen (!isOpen)
        
       const first = document.getElementById("span")

       if (first.id == "span") {
       
       }
    }

   

    
  

   

    return ( 
        <main>
            <div className="min-h-screen mb-6">
                <Header />
                <div>
                <header className="bg-[url(./assets/question-tag.jpg)] h-40 bg-cover">
                        <div className="relative"><p className="absolute top-15 left-2 text-4xl text-white">FAQs</p></div>
                </header>

                <section className="bg-trek1 text-white text-[14px] font-light p-8 mt-8 rounded-lg w-[400px] m-auto h-170">
                    <ul className="space-y-5">
                        <li onClick={()=> toggle(1)} className="faq-styles">Can i Bathe my Pets with DDforce <Plus size={15} className="absolute top-1 left-85" />
                            
                           {faq == 1 && ( <p className= "font-light">No you should never use DDforce or any related chemicals to bath your pets as this could potentially kill them, consider other alternatives like, Anititrax Wash, Spray, Amitraz etc.</p> )}
                        </li><hr />

                        <li onClick={() => toggle(2)} className="faq-styles">Can my Dog be Completely Free of Ticks <Plus size={15} className="absolute top-1 left-85" />
                           {faq == 2 && ( <p className="font-light">Yes your dog can be completely free of ticks through routine checkup, regular bathing, with chemicals at least twice a months</p>)}
                        </li> <hr />

                        <li onClick={() => toggle(3)} className="faq-styles">Do you Treat both Pets & Livestocks <Plus size={15} className="absolute top-1 left-85" />
                        {faq == 3 && ( <p className="font-light">Yes, we provide care for pets like dogs and cats, as well as livestocks such as poultry, sheeps, goats and cattles</p> )}
                        </li> <hr />

                        <li onClick={() => toggle(4)} className="faq-styles">How often should i bring my pet for a Check-up <Plus size={15} className="absolute top-1 left-85" />
                        {faq == 4 && ( <p className="font-light">Pets should be checked at least once or twice a month or immediately they show signs of illness</p> )}
                        </li> <hr />

                        <li onClick={() => toggle(5)} className="faq-styles">How can i Prevent Disease Outbreak in my Farm <Plus size={15} className="absolute top-1 left-85" />
                        {faq == 5 && ( <p className="font-light">Regular vaccination, regular cleaning of pens, proper feeding practices, early detection of diseases. etc</p> )}
                        </li> <hr />

                        <li onClick={() => toggle(6)} className="faq-styles">How do i Book a Consultation <Plus size={15} className="absolute top-1 left-85" />
                        {faq == 6 && (  <p className="font-light">You can book a consultation by calling us directly or using our whatsapp link</p> )}
                        </li> <hr />

                        <li onClick={() => toggle(7)} className="faq-styles">Can i buy Products Online or Place an order Remotely <Plus size={15} className="absolute top-1 left-85" />
                        {faq == 7 && ( <p className="font-light">Yes you can place order via phone call or through whatsapp and arrange for pickup or delivery</p> )}
                        </li> <hr />

                        <li onClick={() => toggle(8)} className="faq-styles">Do you Provide Farm Visitation for Livestock Treatments <Plus size={15} className="absolute top-1 left-85" />
                        {faq == 8 && (  <p className="font-light">Yes we provide farm visits for consultation, treatments and vaccination of livestocks</p> )}
                        </li> <hr />

                        <li onClick={() => toggle(9)} className="faq-styles">Do you sell pet accessories and feeds <Plus size={15} className="absolute top-1 left-85" />
                        {faq == 9 && ( <p className="font-light">Yes we sell pet feed and accesores like leashes, collars, chains and other accessories</p> )}
                        </li> <hr />
                    </ul>
                </section>
                </div>
            </div>
            <Footer />
        </main>
        
    );
}
 
export default FrequentlyAskedQuestions ;