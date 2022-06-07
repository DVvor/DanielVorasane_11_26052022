import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/Collapse/Collapse"
import CoverAbout from "../../assets/cover-about.png"

import './AboutPage.css'

function AboutPage() {
    const contentFiability= "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    const contentRespect= "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const contentService="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    const contentSecurity="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

    return (
    <>
        <Banner cover={CoverAbout} />
        <section className="term">
            <Collapse content={contentFiability} title="Fiabilité" type="large" />
            <Collapse content={contentRespect} title="Respect" type="large" />
            <Collapse content={contentService} title="Service" type="large" />
            <Collapse content={contentSecurity} title="Sécurité" type="large" />
        </section>
    </>
    )

}

export default AboutPage
