import { GanttChartSquare, Sparkles, Heart } from 'lucide-react'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '/components/ui/card'

const qualityData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Organisé',
        description: 'Je mise sur les méthodes agiles et Kanban, avec l\'aide de Notion et Jira, pour gérer mes projets de façon organisée et efficace.',
    },
    {
        icon: <Sparkles size={72} strokeWidth={0.8} />,
        title: 'Créatif',
        description: 'Ma créativité s\'épanouit en UX/UI et dans la création de scénarios pour jeux de rôle sur table, stimulant ainsi mon imagination.',
    },
    {
        icon: <Heart size={72} strokeWidth={0.8} />,
        title: 'Passionné',
        description: 'Ma passion pour le développement web et le design me permet de donner vie aux idées, transformant les projets en réalités.',
    },
]

const Quality = () => {
    return (
        <section className={'mb-12 xl:mb-36'}>
            <div className={'container mx-auto'}>
                <h2 className={'section-title mb-12 xl:mb-24 text-center mx-auto'}>Mes Qualités</h2>
                {/* grid items */}
                <div className={'grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'}>
                    {qualityData.map((item,index) => {
                        return <Card className={'w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'} key={index}>
                            <CardHeader className={'text-primary absolute -top-[60px]'}>
                                <div className={'w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'}>
                                    {item.icon}
                                </div>
                            </CardHeader>
                            <CardContent className={'text-center'}>
                                <CardTitle className={'mb-4'}>
                                    {item.title}
                                </CardTitle>
                                <CardDescription className={'text-lg'}>
                                    {item.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Quality;