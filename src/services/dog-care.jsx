import Bathing from "../bathing";
import Footer from "../footer";
import Header from "../header";



const DogRetainership = () => {
    return ( 
        <main>
            <div className="min-h-screen">
                <Header />
                <div className="relative">
                    <div><Bathing /></div>
                    <div className="absolute inset-0  backdrop-blur-[10px]"></div>
                    <div className="absolute inset-0 font-bold text-center lg:text-4xl justify-center  text-2xl text-white flex items-center ml-2"><p>Dog Retainership & Boarding</p></div>
                </div>

                <section className="bg-gray-50 py-12 px-4 md:px-16">
                    <div className="text-center mb-10">
                        <p className="text-gray-600 max-w-2xl mx-auto">At Trekarios, we provide dedicated care to keep your dog healthy and happy—whether at home or while you're away.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500 mb-2">Retainership Service</h3>
                            <ul className="text-gray-600 list-disc pl-5 space-y-1">
                                <li>Bathing twice a month</li>
                                <li>Multivitamin injections</li>
                                <li>Routine deworming</li>
                            </ul>
                            <p className="text-gray-600 mt-4">A proactive routine to keep your dog clean, strong, and parasite-free.</p>
                        </div>

                
                        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500">Boarding Service</h3>
                            <p className="text-gray-600">Need to travel or take a break? Our boarding service offers a safe, clean, and loving environment where your dog will be cared for like family. Peace of mind for you, comfort for your pet.</p>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    );
}
 
export default DogRetainership;