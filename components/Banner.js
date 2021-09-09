import Image from "next/image";
import { useEffect, useState } from "react";

function Banner() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
            <Image
                src="https://links.papareact.com/0fm"
                layout="fill"
                objectFit="cover"
            />
            
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">Not sure where to go?</p>
                
                <button className="text-purple-500 bg-white px-10 py-4 my-3 shadow-md rounded-full
                    font-bold hover:shadow-xl active:scale-90 transistion duration-150"
                >I'm flexible</button> 
            </div>
    
        </div>
    )
}

export default Banner
