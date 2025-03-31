import { Menu } from "lucide-react";
import logo from "./assets/Trekarios logo.png"

const LandingPage = () => {
    return ( 
        <div>
            <div>
                <header>
                    <Menu />
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </nav>
                    
                    <div>
                        <img src={logo} alt="" className="w-8"/>
                        <h1>Trekarios</h1>
                        <p>Verterinary Pharmacy & Clinic</p>
                    </div>
                </header>

                <main>
                    <div>
                        <h1></h1>
                        <p></p>
                    </div>

                    <div>
                        <a href="#"></a>
                    </div>
                    

                </main>
            </div>
        </div>
     );
}
 
export default LandingPage;