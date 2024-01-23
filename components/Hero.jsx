import Link from 'next/link';
import {Button} from './ui/button'
import {Download,Send} from "lucide-react";

import {
    RiBriefcase4Fill,
    RiUserVoiceFill,
    RiArrowDownSLine,
} from 'react-icons/ri'

import { HiAcademicCap } from "react-icons/hi2";

import DevImg from "./DevImg";
import Badge from "./Badge"
import Socials from "./Socials"

const Hero = () => {
    return (
        <section className={'py-12 xl:py-24 h-[84vh] xl:pt-6 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'}>
            <div className={'container !pl-0 mx-auto'}>
                <div className={'pl-8 flex justify-between gap-x-8'}>
                    {/* Texte */}
                    <div className={'flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'}>
                        <div className={'text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'}>Ingénieur du numérique</div>
                        <h1 className={'h1 mb-4'}>Bonjour, je suis Gauthier Montagne</h1>
                        <p className={'subtitle max-w-[490px] mx-auto xl:mx-0'}>Ingénieur passionné par le web, je marie créativité technique et engagement fort pour concevoir des expériences en ligne exceptionnelles.</p>
                        {/* Boutons */}
                        <div className={'flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-8'}>
                            <Link href={'/contact'}>
                                <Button className={'gap-x-2'}>
                                    Contactez moi
                                    <Send size={18} />
                                </Button>
                            </Link>
                            <a href={"/cv/CV_MONTAGNE_Gauthier.pdf"} download>
                            <Button variant={'secondary'} className={'gap-x-2'}>
                                Télécharger mon CV
                                <Download size={18} />
                            </Button>
                            </a>
                        </div>
                        {/* Socials */}
                        <Socials containerStyles={'flex gap-x-6 mx-auto xl:mx-0'} iconsStyles={'text-foreground text-[36px] hover:text-primary transition-all'}/>
                    </div>
                    {/* Image */}
                    <div className={'hidden xl:flex relative'}>
                        {/* Badge 1 */}
                        <Badge containerStyles={'absolute top-[24%] -left-[6rem]'} icon={<HiAcademicCap />} endCountNum={1} badgeText={"Dîplome d'Ingénieur"}/>
                        {/* Badge 2 */}
                        <Badge containerStyles={'absolute top-[70%] -left-[1rem]'} icon={<RiUserVoiceFill />} endCountNum={2} badgeText={"Langues Maîtrisées"}/>
                        {/* Badge 3 */}
                        <Badge containerStyles={'absolute top-[55%] -right-8'} icon={<RiBriefcase4Fill />} endCountNum={3} badgeText={"Années d'Expérience"}/>
                        <div className={'bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'} />
                        <DevImg containerStyles={'bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'} imgSrc={'/hero/photo-profil.png'}/>
                    </div>
                </div>
                {/* Icones */}
                <div className={'hidden md:flex absolute xl:left-2/4 xl:w-auto md:w-full md:justify-center bottom-44 xl:bottom-6 animate-bounce'}>
                    <RiArrowDownSLine className={'text-3xl text-primary'} />
                </div>
            </div>
        </section>
    )
}

export default Hero;