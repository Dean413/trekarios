import { useEffect } from 'react'
import { useState } from 'react'
import {Typewriter} from 'react-simple-typewriter'

export default function WelcomeTypewriter () {
    const [start, setStart] = useState(false)

        useEffect (()=> {
            const delay = setTimeout(()=> {
                setStart(true); 
            }, 4000)

            return () => clearTimeout(delay)
        },[])

    return (
        <div>
            {start && (
                <Typewriter
                    words={[
                        " We provide professional veterinary services, high-quality pet medications, and expert advice to keep your animals healthy and happy. We also facilitate the booking of day-old chickens, sell pet accessories for dogs, and offer chicken parts as nutritious feed for your pets"
                    ]}
                    loop={1}
                    cursorStyle="|"
                    typeSpeed={30}
                    delaySpeed={1500}
                />  
            )}
           

        </div>          
    )
}