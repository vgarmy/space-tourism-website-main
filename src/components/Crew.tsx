import { useState } from "react";
import anousheh from "../assets/images/crew/image-anousheh-ansari.png";
import douglas from "../assets/images/crew/image-douglas-hurley.png";
import mark from "../assets/images/crew/image-mark-shuttleworth.png";
import victor from "../assets/images/crew/image-victor-glover.png";


// Inline data (ingen import behövs)
const destinations = [
    {
        title: "Commander",
        name: `Douglas Hurley`,
        description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        image: { src: douglas, alt: "Douglas Hurley" },
    },
    {
        title: "Pilot",
        name: `Victor Glover`,
        description: " Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        image: { src: victor, alt: "Victor Glover" },
    },
    {
        title: "Mission Specialist",
        name: `Mark Shuttleworth`,
        description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        image: { src: mark, alt: "Mark Shuttleworth" },
    },
    {
        title: "Flight Enginee",
        name: `Anousheh Ansari`,
        description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        image: { src: anousheh, alt: "Anousheh Ansari" },
    },
];

function Destination() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const current = destinations[currentIndex];

    return (
        <section className="flex flex-col lg:flex-row w-full flex-1">
            <div className="flex-1 flex flex-col text-white gap-6 px-2 md:px-[100px] lg:px-[150px] py-10 md:py-[44px] lg:pt-0 lg:pb-[150px] text-center lg:text-start order-2 md:order-1">
                <div className="flex flex-col px-4 mb-10 hidden md:flex">
                    <p className="text-2xl uppercase font-thin text-white text-center lg:text-start lg:mt-10 lg:mt-0">
                        <b><span className="text-[var(--Blue-300)]">02</span> Meet your crew</b>
                    </p>
                </div>
                {/* Flikar för att välja destination */}
                <h2 className="text-xl md:text-3xl lg:text-4xl uppercase second-font text-[var(--Blue-300)] font-thin px-4 mt-10 order-2 md:order-1">{current.title}</h2>
                <h3 className="text-2xl md:text-4xl lg:text-6xl uppercase second-font font-thin px-4 order-3 md:order-2">{current.name}</h3>

                <p className="tracking-wider text-base text-[var(--Blue-300)] max-w-prose mx-auto lg:mx-0 px-2 md:px-4 order-4 md:order-3">
                    {current.description}
                </p>
                <div className="flex gap-4 justify-center lg:justify-start mt-auto order-1 md:order-4">
                    {destinations.map((d, idx) => (
                        <button
                            key={d.title}
                            onClick={() => setCurrentIndex(idx)}
                            className={[
                                "w-3 h-3 rounded-full transition-colors cursor-pointer",
                                currentIndex === idx
                                    ? "bg-white"
                                    : "bg-[var(--Blue-300)]/30 hover:bg-[var(--Blue-300)]/50",
                            ].join(" ")}
                        />
                    ))}
                </div>
            </div>
            <div className="flex-1 flex-col flex gap-[5rem] px-0 md:px-[150px] justify-end order-1 md:order-2">
                <div className="flex flex-col px-4 md:hidden">
                    <p className="text-2xl uppercase font-thin text-white text-center lg:text-start mt-10 lg:mt-0">
                        <b><span className="text-[var(--Blue-300)]">02</span> Meet your crew</b>
                    </p>
                </div>
                <div>
                    <img
                        src={current.image.src}
                        alt={current.image.alt}
                        className="h-75 md:h-auto md:w-5/7 object-contain mx-auto"
                    />

                </div>
            </div>
        </section>
    );
}

export default Destination;
