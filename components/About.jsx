import DevImg from "./DevImg"
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

import {User2, MailIcon, PhoneCall, GraduationCap, Briefcase} from "lucide-react";
import Image from "next/image";

const infoData = [
    {
        icon: <User2 size={20}/>,
        text: 'Gauthier Montagne',
    },
    {
        icon: <PhoneCall size={20}/>,
        text: '+33 6 51 64 78 87',
    },
    {
        icon: <MailIcon size={20}/>,
        text: 'gaut.montagne@gmail.com',
    },
    {
        icon: <GraduationCap size={20}/>,
        text: "Diplôme d'Ingénieur du Numérique",
    },
];

const qualificationData = [
    {
        title: 'éducation',
        data: [
            {
                university: 'Lycée Léonce Vieljeux',
                qualification: 'BTS SN-IR',
                years: '2018 - 2020',
            },
            {
                university: 'Lycée Léonce Vieljeux',
                qualification: 'Classe préparatoire ATS',
                years: '2020-2021',
            },
            {
                university: 'Junia ISEN Bordeaux',
                qualification: 'Diplôme d\'Ingénieur du Numérique',
                years: '2021 - 2024',
            },
        ],
    },
    {
        title: 'expérience',
        data: [
            {
                company: 'MONTAGNE SARL',
                role: 'Développeur Web - Stage',
                years: 'Mai - Juin 2019',
            },
            {
                company: 'Murkhasya Studio (Espagne)',
                role: 'Développeur Web - Stage',
                years: 'Juin - Août 2023',
            },
            {
                company: 'MAIF',
                role: 'Développeur Logiciel',
                years: 'Sept. 2021 - Aujourd\'hui',
            },

        ],
    },
];

const skillData = [
    {
        title: 'Compétences',
        data: [
            {
                name:'Développement Front-end',
            },
            {
                name:'HTML, CSS',
            },
            {
                name:'Développement Back-end',
            },
            {
                name:'Javascript, Python',
            },
            {
                name:'Frameworks',
            },
            {
                name:'Next.js, Tailwind CSS',
            },
        ],
    },
    {
        title: 'Outils',
        data: [
            {
                imgPath:'/about/jetbrains.svg',
            },
            {
                imgPath:'/about/notion.svg',
            },
            {
                imgPath:'/about/figma.svg',
            },
        ],
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

    return (
        <section className={'xl:h-[860px] pb-12 xl:py-24'}>
            <div className={'container mx-auto'}>
                <h2 className={'section-title mb-8 xl:mb-16 text-center mx-auto'}>
                    À propos de moi
                </h2>
                <div className={'flex flex-col xl:flex-row'}>
                    {/* image */}
                    <div className={'hidden xl:flex flex-1 relative'}>
                        <DevImg containerStyles={'bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'} imgSrc={'/about/photo-about.png'} />
                    </div>
                    {/* tabs */}
                    <div className={'flex-1'}>
                        <Tabs defaultValue={'personal'}>
                            <TabsList className={'w-full h-auto grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'}>
                                <TabsTrigger className={'w-[162px] xl:w-auto'} value={'personal'}>Informations</TabsTrigger>
                                <TabsTrigger value={'qualifications'}>Qualifications</TabsTrigger>
                                <TabsTrigger value={'skills'}>Compétences</TabsTrigger>
                            </TabsList>
                            {/* tabs content*/}
                            <div className={'text-lg mt-12 xl:mt-8'}>
                                {/* personal */}
                                <TabsContent value={'personal'}>
                                    <div className={'text-center xl:text-left'}>
                                        <h3 className={'h3 mb-4'}>
                                            Innovation et Expertise en Développement Web
                                        </h3>
                                        <p className={'subtitle max-w-xl max-auto xl:mx-0'}>
                                            Je me spécialise dans les expériences utilisateurs captivantes, en développant des solutions web modernes et efficaces, avec un accent sur l'expérience utilisateur.
                                        </p>
                                        {/* icons */}
                                        <div className={'grid xl:grid-cols-2 gap-4 mb-12'}>
                                            {infoData.map((item, index) => {
                                                return <div key={index} className={'flex items-center gap-x-4 mx-auto xl:mx-0'}>
                                                    <div className={'text-primary'}>{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                            })}
                                        </div>
                                        {/* languages */}
                                        <div className={'flex flex-col gap-y-2'}>
                                            <div className={'text-primary'}>Compétences Linguistiques</div>
                                            <div className={'border-b border-border'}></div>
                                            <div>Français (Langue Natal) et Anglais (Niveau C1)</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* qualifications */}
                                <TabsContent value={'qualifications'}>
                                    <div>
                                        <h3 className={'h3 mb-8 text-center xl:text-left'}>Mon Parcours</h3>
                                        <div className={'grid md:grid-cols-2 gap-y-8'}>
                                            {/* experience */}
                                            <div className={'flex flex-col gap-y-6'}>
                                                <div className={'flex gap-x-4 items-center text-[22px] text-primary'}>
                                                    <Briefcase />
                                                    <h4 className={'capitalize font-medium'}>
                                                        {getData(qualificationData, 'expérience').title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className={'flex flex-col-reverse gap-y-8'}>
                                                    {getData(qualificationData, 'expérience').data.map((item, index) => {
                                                        const {company, role, years} = item;
                                                        return (
                                                            <div className={'flex gap-x-8 group'} key={index}>
                                                                <div className={'h-[84px] w-[1px] bg-border relative ml-2'}>
                                                                    <div className={'w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'}></div>
                                                                </div>
                                                                <div>
                                                                    <div className={'font-semibold text-xl leading-none mb-2'}>
                                                                        {company}
                                                                    </div>
                                                                    <div className={'text-lg leading-none text-muted-foreground mb-4'}>
                                                                        {role}
                                                                    </div>
                                                                    <div className={'text-base font-medium'}>
                                                                        {years}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            {/* education */}
                                            <div className={'flex flex-col gap-y-6'}>
                                                <div className={'flex gap-x-4 items-center text-[22px] text-primary'}>
                                                    <GraduationCap size={28} />
                                                    <h4 className={'capitalize font-medium'}>
                                                        {getData(qualificationData, 'éducation').title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className={'flex flex-col-reverse gap-y-8'}>
                                                    {getData(qualificationData, 'éducation').data.map((item, index) => {
                                                        const {university, qualification, years} = item;
                                                        return (
                                                            <div className={'flex gap-x-8 group'} key={index}>
                                                                <div className={'h-[84px] w-[1px] bg-border relative ml-2'}>
                                                                    <div className={'w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'}></div>
                                                                </div>
                                                                <div>
                                                                    <div className={'font-semibold text-xl leading-none mb-2'}>
                                                                        {university}
                                                                    </div>
                                                                    <div className={'text-lg leading-none text-muted-foreground mb-4'}>
                                                                        {qualification}
                                                                    </div>
                                                                    <div className={'text-base font-medium'}>
                                                                        {years}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* compétences */}
                                <TabsContent value={'skills'}>
                                    <div className={'text-center xl:text-left'}>
                                        <h3 className={'h3 mb-8'}>Ce Que J'utilise Tous Les Jours</h3>
                                        {/* Compétences */}
                                        <div className={'mb-12'}>
                                            <h4 className={'text-xl font-semibold mb-2'}>Compétences</h4>
                                            <div className={'border-b border-border mb-4'}></div>
                                            {/* compétences list */}
                                            <div>
                                                {getData(skillData, 'Compétences').data.map((item, index) => {
                                                    const {name} = item;
                                                    const className = index % 2 === 1 ? 'font-thin' : 'font-medium';
                                                    return (
                                                        <div className={`w-2/4 text-center xl:text-left mx-auto xl:mx-0`} key={index}>
                                                            <div className={className}>
                                                                {name}
                                                            </div>
                                                        </div>
                                                    );
                                                })}

                                            </div>
                                        </div>
                                        {/* Outils */}
                                        <div>
                                            <h4 className={'text-xl font-semibold mb-2 xl:text-left'}>Outils</h4>
                                            <div className={'border-b border-border mb-4'}></div>
                                            {/* Outils list */}
                                            <div className={'flex gap-x-8 justify-center xl:justify-start'}>
                                                {getData(skillData, 'Outils').data.map((item, index) => {
                                                    const {imgPath} = item;
                                                    return <div key={index}>
                                                        <Image src={imgPath} width={48} height={48} alt={index} priority/>
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;