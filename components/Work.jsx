'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";

import 'swiper/css'
import 'swiper/css/pagination'

import {Pagination} from "swiper/modules";

import ProjectCard from "@/components/ProjectCard";

const projectData = [
    {
        image: '/work/1.png',
        category: 'react js',
        name: 'Murkhasya',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis',
        link: '/',
    },
    {
        image: '/work2.png',
        category: 'react js',
        name: 'InsightEdu',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis',
        link: '/',
        github: '/',
    },
];

const Work = () => {
    return (
        <section>
            <div className={'container mx-auto'}>
                {/*Text*/}
                <div className={'max-w-[400px] mx-auto'}>
                    <h2 className={'section-title mb-4'}>Derniers Projets</h2>
                    <p className={'subtitle mb-8'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Link href={'/projects'}>
                        <Button>Tous les projets</Button>
                    </Link>
                </div>
                {/*Slider*/}
            </div>
        </section>
    )
}

export default Work;