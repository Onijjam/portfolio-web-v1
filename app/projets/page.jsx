'use client';
import React, {useState} from "react";
import {Tabs, TabsList, TabsContent, TabsTrigger} from "/components/ui/tabs"
import ProjectCard from "/components/ProjectCard";

const projectData = [
    {
        image: '/work/1.png',
        category: 'react js',
        name: 'Murkhasya',
        description: "Site vitrine pour une galerie d'art de Barcelone en partant d'un figma d'un designer.",
        link: 'https://www.murkhasya.com/',
    },
    {
        image: '/work/2.png',
        category: 'fullstack',
        name: 'InsightEdu',
        description: "SaaS pour un organisme de formation permettant une transition vers le numérique.",
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
        <div className={'container mx-auto'}>
            <h2 className={'section-title mb-8 xl:mb-16 text-center mx-auto'}>Mes Projets</h2>
            {/* Tabs */}
            <Tabs defaultValue={category} className={'mb-24 xl:mb-48'}>
                {/* Edit le md:grid-cols-3 pour le nombre de categories */}
                <TabsList className={'w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'}>
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