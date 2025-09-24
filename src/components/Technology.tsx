import { useState, useEffect } from "react";
import vehicale from "../assets/images/technology/image-launch-vehicle-portrait.jpg";
import capsule from "../assets/images/technology/image-space-capsule-portrait.jpg";
import spaceport from "../assets/images/technology/image-spaceport-portrait.jpg";
import tabvehicale from "../assets/images/technology/image-launch-vehicle-landscape.jpg";
import tabcapsule from "../assets/images/technology/image-space-capsule-landscape.jpg";
import tabspaceport from "../assets/images/technology/image-spaceport-landscape.jpg";

const destinations = [
    {
        name: "Launch vehicle",
        termology: `The terminology...`,
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        imagePortrait: vehicale,
        imageLandscape: tabvehicale,
        alt: "Launch vehicle",
    },
    {
        name: "Space capsule",
        termology: `The terminology...`,
        description: " A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        imagePortrait: capsule,
        imageLandscape: tabcapsule,
        alt: "Space capsule",
    },
    {
        name: "Spaceport",
        termology: `The terminology...`,
        description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        imagePortrait: spaceport,
        imageLandscape: tabspaceport,
        alt: "Spaceport",
    },
];

function Technology() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const current = destinations[currentIndex];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); // Ändra breakpoint här om du vill
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="flex flex-col lg:flex-row w-full flex-1">
            <div className="flex-1 flex-col flex gap-[5rem] lg:pt-10 lg:pb-[150px] px-2 md:px-[150px] order-2 lg:order-1">
                <div className="flex flex-col px-4 hidden md:flex">
                    <p className="text-2xl uppercase font-thin text-white text-center lg:text-start mt-10 lg:mt-0" >
                        <b><span className="text-[var(--Blue-300)]">03</span> Space launch 101</b>
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-10 px-4">
                    <div className="flex lg:flex-col gap-10 justify-center items-center lg:items-start second-font font-thin">
                        {destinations.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={[
                                    "flex items-center justify-center w-20 h-20 rounded-full border border-white font-bold text-3xl transition-colors cursor-pointer",
                                    currentIndex === idx ? "text-black bg-white" : "text-white bg-transparent hover:bg-white hover:text-black"
                                ].join(" ")}
                            >
                                {idx + 1}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-col gap-6 max-w-prose">
                        <p className="uppercase tracking-wider text-base text-[var(--Blue-300)]">{current.termology}</p>
                        <h3 className="text-4xl md:text-6xl uppercase second-font font-thin text-white">
                            {current.name}
                        </h3>
                        <p className="tracking-wider text-base text-[var(--Blue-300)]">
                            {current.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col gap-[5rem] lg:pt-10 lg:pb-[150px] lg:px-2 lg:items-end order-1 lg:order-2 lg:mb-0 mb-10">
                <div className="flex flex-col px-4 lg:hidden">
                    <p className="text-2xl uppercase font-thin text-white text-center lg:text-start mt-10 lg:mt-0">
                        <b><span className="text-[var(--Blue-300)]">03</span> Space launch 101</b>
                    </p>
                </div>
                <div>
                    <img
                        src={isMobile ? current.imageLandscape : current.imagePortrait}
                        alt={current.alt}
                        className="w-full max-w-6xl h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
}

export default Technology;
