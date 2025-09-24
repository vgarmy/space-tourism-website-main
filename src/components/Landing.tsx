import { useState, useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import desktopImage from '../assets/images/home/background-home-desktop.jpg';
import tabletImage from '../assets/images/home/background-home-tablet.jpg';
import mobileImage from '../assets/images/home/background-home-mobile.jpg';
import destdesktopImage from '../assets/images/destination/background-destination-desktop.jpg';
import desttabletImage from '../assets/images/destination/background-destination-tablet.jpg';
import destmobileImage from '../assets/images/destination/background-destination-mobile.jpg';
import crewdesktopImage from '../assets/images/crew/background-crew-desktop.jpg';
import crewtabletImage from '../assets/images/crew/background-crew-tablet.jpg';
import crewmobileImage from '../assets/images/crew/background-crew-mobile.jpg';
import Destination from './Destination';
import Crew from './Crew';
import Technology from './Technology';

function Landing() {
    const [bgImage, setBgImage] = useState(desktopImage);
    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {
        const updateBackground = () => {
            const width = window.innerWidth;
            if (currentPage === 'home') {
                if (width < 768) setBgImage(mobileImage);
                else if (width < 1024) setBgImage(tabletImage);
                else setBgImage(desktopImage);
            } else if (currentPage === 'destination') {
                if (width < 768) setBgImage(destmobileImage);
                else if (width < 1024) setBgImage(desttabletImage);
                else setBgImage(destdesktopImage);
            } else if (currentPage === 'crew') {
                if (width < 768) setBgImage(crewmobileImage);
                else if (width < 1024) setBgImage(crewtabletImage);
                else setBgImage(crewdesktopImage);
            }

        };

        updateBackground();
        window.addEventListener('resize', updateBackground);
        return () => window.removeEventListener('resize', updateBackground);
    }, [currentPage]);

    return (
        <main
            className="w-full min-h-screen bg-no-repeat bg-center bg-cover flex flex-col"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <Header onNavigate={setCurrentPage} />
            <div className="flex-1 flex">
                {currentPage === 'home' && <Home />}
                {currentPage === 'destination' && <Destination />}
                {currentPage === 'crew' && <Crew />}
                {currentPage === 'technology' && <Technology />}
            </div>
        </main>
    );
}

export default Landing;