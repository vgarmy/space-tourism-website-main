import { useState } from "react";
import moonPng from "../assets/images/destination/image-moon.png";
import marsPng from "../assets/images/destination/image-mars.png";
import europaPng from "../assets/images/destination/image-europa.png";
import titanPng from "../assets/images/destination/image-titan.png";


// Inline data (ingen import behövs)
const destinations = [
    {
        name: "Moon",
        description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
        distance: "384,400 km",
        travelTime: "3 days",
        image: { src: moonPng, alt: "The Moon" },
    },
    {
        name: "Mars",
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: "225 mil. km",
        travelTime: "9 months",
        image: { src: marsPng, alt: "The Moon" },
    },
    {
        name: "Europa",
        description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
        distance: "628 mil. km",
        travelTime: "3 years",
        image: { src: europaPng, alt: "The Moon" },
    },
    {
        name: "Titan",
        description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: "1.6 bil. km",
        travelTime: "7 years",
        image: { src: titanPng, alt: "The Moon" },
    },
];

function Destination() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const current = destinations[currentIndex];

    return (
        <section className="flex flex-col lg:flex-row w-full flex-1">
            {/* Vänsterkolumn – behåller din cirkel */}
            <div className="flex-1 flex-col flex gap-[5rem] lg:pt-10 lg:pb-[150px] px-2 md:px-[150px]">
                <div className="flex flex-col px-4">
                    <p className="text-2xl uppercase font-thin text-white text-center lg:text-start mt-10 lg:mt-0">
                        <b><span className="text-[var(--Blue-300)]">01</span> Pick your destination</b>
                    </p>
                </div>
                <div>
                    <img
                        src={current.image.src}
                        alt={current.image.alt}
                        className="w-48 h-48 md:w-72 md:h-72 lg:w-[500px] lg:h-[500px] object-contain mx-auto"
                    />

                </div>
            </div>

            {/* Högerkolumn – innehåll styrs av inline-data */}
            <div className="flex-1 flex flex-col text-white gap-6 lg:gap-10 px-10 md:px-[100px] py-[100px] lg:px-[150px] lg:py-[150px] text-center lg:text-start">
                {/* Flikar för att välja destination */}
                <div className="flex gap-6 justify-center lg:justify-start">
                    {destinations.map((d, idx) => (
                        <button
                            key={d.name}
                            onClick={() => setCurrentIndex(idx)}
                            className={[
                                "uppercase tracking-[0.2em] text-sm pb-2 border-b-2 transition-colors cursor-pointer",
                                currentIndex === idx
                                    ? "text-white border-white"
                                    : "text-[var(--Blue-300)] border-transparent hover:border-[var(--Blue-300)]",
                            ].join(" ")}
                        >
                            {d.name}
                        </button>
                    ))}
                </div>

                <h3 className="text-6xl md::text-8xl uppercase second-font font-thin">{current.name}</h3>

                <p className="tracking-wider text-base text-[var(--Blue-300)] max-w-prose mx-auto lg:mx-0">
                    {current.description}
                </p>

                {/* Stats-rad */}
                <div className="mt-8 pt-8 border-t border-white/20 flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center lg:justify-start">
                    <div>
                        <p className="uppercase text-[var(--Blue-300)] text-sm tracking-[0.2em]">
                            Avg. distance
                        </p>
                        <p className="text-3xl">{current.distance}</p>
                    </div>
                    <div>
                        <p className="uppercase text-[var(--Blue-300)] text-sm tracking-[0.2em]">
                            Est. travel time
                        </p>
                        <p className="text-3xl">{current.travelTime}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Destination;
