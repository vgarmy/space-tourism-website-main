import { useState, useEffect } from 'react';
import Header from './Header';
import desktopImage from '../assets/images/home/background-home-desktop.jpg';
import tabletImage from '../assets/images/home/background-home-tablet.jpg';
import mobileImage from '../assets/images/home/background-home-mobile.jpg';

function Home() {
    const [bgImage, setBgImage] = useState(desktopImage);

    useEffect(() => {
        const updateBackground = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setBgImage(mobileImage);
            } else if (width < 1024) {
                setBgImage(tabletImage);
            } else {
                setBgImage(desktopImage);
            }
        };

        updateBackground();
        window.addEventListener('resize', updateBackground);
        return () => window.removeEventListener('resize', updateBackground);
    }, []);

    return (
        <main
            className="w-full h-screen bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <Header />
        </main>
    );
}

export default Home;
