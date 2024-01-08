import Image from "next/image";

const DevImg = ({containerStyles, imgSrc}) => {
    return (
        <div className={`${containerStyles}`}>
            <Image src={imgSrc} fill priority alt={'photo de profil'} />
        </div>
    )
}

export default DevImg;