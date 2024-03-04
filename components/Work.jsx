'use client';
import Link from "next/link";
import { Button } from "/components/ui/button";

import 'swiper/css'
import 'swiper/css/pagination'

import {Pagination} from "swiper/modules";

import ProjectCard from "/components/ProjectCard";
import {Swiper, SwiperSlide} from "swiper/react";

const projectData = [
    {
        image: '/work/2.png',
        category: 'fullstack',
        name: 'InsightEdu',
        description: "SaaS pour un organisme de formation permettant une transition vers le numérique.",
    },
    {
        image: '/work/1.png',
        category: 'react js',
        name: 'Murkhasya',
        description: "Site vitrine pour une galerie d'art de Barcelone en partant d'un figma d'un designer.",
        link: 'https://www.murkhasya.com/',
    },
    {
        image: '/work/3.png',
        category: 'next js',
        name: 'Portfolio',
        description: "Réalisation de mon portfolio web afin de me former au framework NEXT JS.",
        link: 'https://www.g-montagne.com/',
        github: 'https://github.com/Onijjam/portfolio-web-v1',
    },
    {
        image: '/work/4.png',
        category: 'react js',
        name: 'Web App IoT',
        description: "Projet d'école sur le contrôle de plusieurs imprimantes 3D via une web app.",
        github: 'https://github.com/Onijjam/iot-projet',
    },
];

const Work = () => {
    return (
        <section className={'relative mb-12 xl:mb-48'}>
            <div className={'max-[1279px]:container max-[1319px]:!px-8 min-[1320px]:container mx-auto'}>
                {/*Text*/}
                <div className={'max-[1279px]:max-w-[400px] max-[1319px]:max-w-[350px] min-[1320px]:max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center xl:items-start'}>
                    <h2 className={'section-title mb-4'}>Derniers Projets</h2>
                    <p className={'subtitle mb-8'}>
                        Pour se former il faut pratiquer régulièrement.
                    </p>
                    <Link href={'/projets'}>
                        <Button>Tous les projets</Button>
                    </Link>
                </div>
                {/*Slider*/}
                <div className={'xl:max-w-[900px] xl:absolute right-0 top-0'}>
                    <Swiper className={'h-[480px]'} slidesPerView={1} breakpoints={{640: {
                        slidesPerView: 2
                        }
                    }} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}>
                        {projectData.slice(0,4).map((project, index) => {
                            return <SwiperSlide key={index}>
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Work;