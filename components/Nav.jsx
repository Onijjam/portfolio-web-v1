import Link from "next/link";
import {usePathname} from "next/navigation";
import {motion} from "framer-motion";
import {ChevronDown} from "lucide-react";
import {Popover, PopoverContent, PopoverTrigger} from "./ui/popover";


const links = [
    { path: '/', name: 'Accueil' },
    { path: '/projets', name: 'Mes Projets' },
    { path: '/contact', name: 'contact' },
]

const Nav = ({containerStyles, linkStyles, underlineStyles}) => {
    const path = usePathname();
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`capitalize ${linkStyles}`}
                    >
                        {link.path === path && (
                            <motion.span
                                initial={{y: '-100%' }}
                                animate={{ y: 0 }}
                                transition={{ type: 'tween' }}
                                layoutId={'underline'}
                                className={`${underlineStyles}`}
                            />
                        )}
                        {link.name}
                    </Link>
                );
            })}
            <Popover>
                <PopoverTrigger className={"hover:text-primary group cursor-pointer flex flex-row justify-center items-center"}>
                    FR
                    <ChevronDown size={13} className={"group-data-[state=open]:rotate-180 ease-in-out transition-all"}/>
                </PopoverTrigger>
                <PopoverContent>
                    <div className={"p-2 hover:text-primary cursor-pointer"}>
                        FR
                    </div>
                    <div className={"p-2 hover:text-primary cursor-pointer border-t-2"}>
                        EN
                    </div>
                </PopoverContent>
            </Popover>
        </nav>
    )
}

export default Nav