import { useState, useEffect } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Aos from 'aos';
import { faqImage } from '../../assets'

const Icon = ({ id, open }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}

const Faq = () => {
    const [open, setOpen] = useState(0);

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, [])

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div className="lg:w-1/2 w-[95%] mx-auto my-10">
            <h1 className="text-center text-4xl md:text-5xl" style={{ fontWeight: '700', lineHeight: '60px' }} data-aos='fade-down'>Frequently asked questions?</h1>
            <p className="text-center mb-8" data-aos='fade-up'>Are you unsure of how Synkify platform works? We’ve have answers for you here</p>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />} data-aos='fade-up' data-aos-delay='600' data-aos-duration='900'>
                <AccordionHeader onClick={() => handleOpen(1)}>
                    How does Synkify platform works?
                </AccordionHeader>
                <AccordionBody>
                    Synkify platform allows you to integrate multiple social media platforms.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />} data-aos='fade-up' data-aos-delay='900' data-aos-duration='900'>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    How do I link my social media profiles and groups?
                </AccordionHeader>
                <AccordionBody>
                    From the User dashboard, click on accounts to link all your social media profiles and groups
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />} data-aos='fade-up' data-aos-delay='1200' data-aos-duration='900'>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    How do I send instant posts to all platforms at once?
                </AccordionHeader>
                <AccordionBody>
                    From the User dashboard, click on posts to link all your social media profiles and groups.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />} data-aos='fade-up' data-aos-delay='1500' data-aos-duration='900'>
                <AccordionHeader onClick={() => handleOpen(4)}>
                    Is Synkify a free or paid platform?
                </AccordionHeader>
                <AccordionBody>
                    Accessing features on the platform is free. create an account to integrate your social media accounts and enjoy the features for free.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />} data-aos='fade-up' data-aos-delay='1800' data-aos-duration='900'>
                <AccordionHeader onClick={() => handleOpen(5)}>
                    How do I schedule posts from the platform?
                </AccordionHeader>
                <AccordionBody>
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                    We&apos;re constantly trying to express ourselves and actualize our
                    dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 6} icon={<Icon id={6} open={open} />} data-aos='fade-up' data-aos-delay='2100' data-aos-duration='900'>
                <AccordionHeader onClick={() => handleOpen(6)}>
                    What are the privacy policies?
                </AccordionHeader>
                <AccordionBody>
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                    We&apos;re constantly trying to express ourselves and actualize our
                    dreams.
                </AccordionBody>
            </Accordion>
            <div className="flex flex-col items-center my-10" data-aos='zoom-in-down'>
                <h3 className="text-center text-2xl" style={{ fontWeight: '700', lineHeight: '36px' }}>You didn’t find an answer to your question here?</h3>
                <h4 className="text-center mb-8">Kindly, reach out to our support team here for further answers </h4>
                <img src={faqImage} alt="woman on FAQ" />
                <Link to="/contact" className="text-center py-5 px-6 text-white mt-8" style={{ background: '#2B5C5F' }}>CONTACT US</Link>
            </div>
        </div>
    );
}

export default Faq;
