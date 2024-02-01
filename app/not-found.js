import Link from 'next/link'

export default function NotFound() {
    return (<section>
        <div className={'container mx-auto h-screen'}>
            {/* texte & illustrations*/}
            <div className={'grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'}>
                {/* texte */}
                <div className={'flex flex-col justify-center'}>
                    <div className={' flex items-center gap-x-4 text-3xl text-primary mb-4'}>
                        <span className={'w-[30px] h-[2px] bg-primary'}/>
                        404 ❌
                    </div>
                    <h1 className={'h1 max-w-md mb-8'}>Oops, cette page n'existe pas.</h1>
                    <p className={'subtitle max-w-[400px]'}>
                        Vous pouvez revenir au menu principal en cliquant juste en <a href={"/"} className={'underline text-primary'}>ici</a>.
                    </p>
                </div>
                {/* illustration */}
                <div className={'hidden xl:flex w-full bg-not_found bg-contain bg-top bg-no-repeat'}/>
            </div>
        </div>
    </section>)
}