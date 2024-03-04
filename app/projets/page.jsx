'use client';
import React, {useState} from "react";
import {Tabs, TabsList, TabsContent, TabsTrigger} from "/components/ui/tabs"
import ProjectCard from "/components/ProjectCard";

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

const uniqueCategories = ['Tous les projets', ...new Set(projectData.map((item) => item.category))];


const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories)
    const [category, setCategory] = useState('Tous les projets');

    const filteredProjects = projectData.filter(project => {
        return category === 'Tous les projets'
        ? project
            : project.category === category;
    });

    return (<section className={"min-h-screen pt-12"}>
        <div className={'max-[1279px]:container max-[1319px]:!px-8 min-[1320px]:container mx-auto'}>
            <h2 className={'section-title mb-8 xl:mb-16 text-center mx-auto'}>Mes Projets</h2>
            {/* Tabs */}
            <Tabs defaultValue={category} className={'mb-24 xl:mb-48'}>
                {/* Edit le md:grid-cols-4 pour le nombre de categories */}
                <TabsList className={'w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'}>
                    {categories.map((category, index) => {
                        return <TabsTrigger
                            onClick={() => setCategory(category)}
                            key={index}
                            value={category}
                            className={'capitalize w-[162px] md:w-auto'}
                        >
                            {category}
                        </TabsTrigger>
                    })}
                </TabsList>
                {/* Tabs content */}
                <div className={'text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'}>
                    {filteredProjects.map((project,index) => {
                        return <TabsContent value={category} key={index}>
                            <ProjectCard project={project}/>
                        </TabsContent>
                    })}
                </div>
            </Tabs>
        </div>
    </section>);
}

export default Projects;