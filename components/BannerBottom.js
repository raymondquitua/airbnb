import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function BannerBottom() {
    return (
        
        <div className="relative">
                <Carousel
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    interval={4000}
                >
                    <div>
                        <img 
                            src="https://links.papareact.com/gi1"
                            loading="lazy"
                            alt=""
                        />
                    </div>
                    <div>
                        <img 
                            src="https://links.papareact.com/6ff"
                            loading="lazy"
                            alt=""
                        />
                    </div>
                    <div>
                        <img 
                            src="https://links.papareact.com/7ma"
                            loading="lazy"
                            alt=""
                        />
                    </div>
                    
                </Carousel>
            </div>
       
    );
}

export default BannerBottom;
