import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "./../../components/Form"


const Contact = () => {
    return (<section>
        <div className={'max-[1279px]:container max-[1319px]:!px-8 min-[1320px]:container mx-auto'}>
            {/* texte & illustrations*/}
            <div className={'grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'}>
                {/* texte */}
                <div className={'flex flex-col justify-center'}>
                    <div className={' flex items-center gap-x-4 text-primary mb-4'}>
                        <span className={'w-[30px] h-[2px] bg-primary'}/>
                        Dîtes Bonjour 👋
                    </div>
                    <h1 className={'h1 max-w-md mb-8'}>Travaillons ensemble.</h1>
                    <p className={'subtitle max-w-[400px]'}>
                        N'hésitez pas à me contacter pour discuter de notre avenir.
                    </p>
                </div>
                {/* illustration */}
                <div className={'hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'}/>
            </div>
            {/* info & form*/}
            <div className={'grid xl:grid-cols-2 mb-24 xl:mb-32'}>
                <div className={'flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'}>
                    <div className={'flex items-center gap-x-8'}>
                        <MailIcon size={18} className={'text-primary'}/>
                        <div>gaut.montagne@gmail.com</div>
                    </div>
                    <div className={'flex items-center gap-x-8'}>
                        <HomeIcon size={18} className={'text-primary'}/>
                        <div>33000 Bordeaux</div>
                    </div>
                    <div className={'flex items-center gap-x-8'}>
                        <PhoneCall size={18} className={'text-primary'}/>
                        <div>+33 6 51 64 78 87</div>
                    </div>
                </div>
                <Form />
            </div>
        </div>
    </section>);
}

export default Contact;