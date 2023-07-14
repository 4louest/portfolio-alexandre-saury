import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const experiences = [
  {
    range: "2022 - Aujourd'hui",
    title: "Développeur freelance",
    sub: "Développeur fullstack & designer web",
    desc:
      "Développement, livraison et maintenance d'application web de haute qualité pour clients de différents horizons \
      (menuisiers, photographes, PME).",
    tags: ["React", "Gatsby", "Wordpress", "Ghost", "Rust", "Javascript"],
  },
  {
    range: "2017 - 2022",
    title: "Ingénieur d'étude Fiducial Informatique",
    sub: "Développeur fullstack Java & Angular",
    desc:
      "Développement d'une application fullstack de rédaction d'acte à destination des cabinets notaire en mode SaS.",
    tags: ["Java", "Spring", "Hibernate", "MySQL", "Angular", "Debian", "Git"],
    link: "https://www.fiducial.fr/",
  },
  {
    range: "2013 - 2017",
    title: "Dirigeant d'entreprise 4lcom",
    sub: "CEO & Développeur Symfony, AngularJS, Node, Swift",
    desc:
      "Développement de solution complète à destination de chaînes de restauration. Clients principaux: O'Tacos (voir projet), Popsushi.",
    tags: ["Symfony", "AngularJS", "ElasticSearch", "Electron", "Swift"],
    link: "https://4lcom.fr/"
  },
  {
    range: "2009 - 2011",
    title: "Développeur d'application chez Ooxiem",
    sub: "Développeur .net, flex, php",
    desc:
      "Développement d'application à destination de TPE et PME type Valéo, Carrefour, 4Murs etc.",
    tags: ["Php", "Html/Css", ".Net", "Flex", "MySQL", "Access"],
  },
  {
    range: "2008 - 2010",
    title: "Développeur web chez Attrait",
    sub: "Développeur web PHP & html/css/Jquery",
    desc:
      "Développement de sites web type portail et e-commerce.",
    tags: ["Php", "Html/Css", "JQuery", "MySQL"],
    link: "https://attrait.com/",
  },
]

const projects = [
  {
    title: "mathurinvauthier.com, photographe montagne professionnel et alpiniste",
    desc: "Conception et paramétrage d'un site web pour artiste photographe montagne basé sur CMS Wordpress",
    image: "/images/logo-signature.png",
    link: "https://www.mathurinvauthier.com",
  },
  {
    title: "Wimenuiserie, site web menuisier professionnel",
    desc: "Conception et paramétrage d'un site web pour artisan menuisier lyonnais basé sur CMS Wordpress",
    image: "/images/logo-wim.png",
    link: "https://www.wimenuiserie.com/",
  },
  {
    title: "Développement progiciel Signature by Fiducial",
    desc: "Solution globale agrégeant plusieurs outils à destination des notaires <br/><br/> \
    1. Logiciel de rédaction d'acte (LRA) <br/>\
    2. Outil de signature electronique d'acte basé sur technologie Micen <br> \
    3. Application de gestion workflow autour de la rédaction, du suivi et du dépôt d'acte notarié.<br/> \
    4. Pilotage et communication avec webservices externes.",
    image: "/images/logo-signature.png",
    link: "https://www.fiducial.fr/Notariat/Logiciel-Notaire/Signature",
  },
  {
    title: "Réalisation de l'infrastructure technique pour la franchise O'Tacos",
    desc: "Solution globale agrégeant plusieurs canaux de vente <br/><br/><ol> \
    <li>Caisse enregistreuse internationale (France, US, Brooklyn, Maroc, Brunei)<br/> \
    Application web avec fonctionnement offline et communication entre les points de vente d'un même restaurant, gestion de catalogue centralisée, remontée en temps réel des données de vente.</li>\
    <li>E-commerce a base de Prestashop</li>\
    <li>Application mobile multiplateforme développée avec IONIC consommant l'api REST du ecommerce.</li>\
    <li>Borne tactile de prise de commande réalisée avec Electron, interfaçage avec TPE Ingenico et imprimante thermique, échange Websocket avec les caisses enregistreuse du même restaurant pour impression des tickets en cuisine.</li>\
    <li>Interface de gestion de franchise :\
    &emsp;- Affichage temps réel des chiffres d'affaire par pays, par franchise, par restaurant, par produit etc.<br/> \
    &emsp;- Interface de configuration des caisses évitant une connexion en télémaintenance (configuration des imprimantes, version logicielles, clé API etc..)<br/> \
    &emsp;- Gestion des catalogues de produits globaux avec spécificités réglables par restaurants, synchronisation automatique et pilotable à la demande vers le e-commerce et chaque point de vente.<br/> \
    &emsp;- Pilotage + Facturation automatique des redevances par franchisé.<br/> \
    &emsp;- Suivi des plannings et temps de présences des employés</li>",
    image: "/images/logo-otacos.png",
    link: "https://www.o-tacos.fr/",
  },
];

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => {

  const [activeItem, setActiveItem] = React.useState("");
  const resetActive = () => setActiveItem("");

  return (
    <Layout>
      <div className={styles.container}>
        <header className={styles.menu}>
          <h1>
            Alexandre Saury
          </h1>
          <h2>
            Développeur full stack freelance
          </h2>
          <p>Je conçois des produits et des expériences numériques accessibles et inclusifs pour le web.</p>
          <ul>
            <li>
              <Link to="/" onClick={() => setActiveItem("")}
                className={`${styles.menuItem} ${activeItem === "" ? styles.active : undefined}`}>A propos</Link>
            </li>
            <li>
              <Link to="#experience" onClick={() => setActiveItem('experience')}
                className={`${styles.menuItem} ${activeItem === 'experience' ? styles.active : undefined}`}>Expérience</Link>
            </li>
            <li>
              <Link to="#projets" onClick={() => setActiveItem('projets')}
                className={`${styles.menuItem} ${activeItem === 'projets' ? styles.active : undefined}`}>Projets</Link>
            </li>
          </ul>
        </header>
        <section>
          <div id="about" className={styles.mainBody}>
            <p className={styles.inherit}>
              Passionné depuis toujours par l'informatique et le développement, j'ai créé ma première <b>start-up</b> en 2013.
              Avec 4 associés, nous avons développé tout un écosystème à destination de chaînes de restauration. Notre solution intègre entre autres, une application d'encaissement, un système de commande centralisé avec un <b>BI</b> piloté grâce à <b>ElasticSearch</b>,
              des canaux de commande (site internet, application mobile, borne de commande interactive) et des outils marketing tels qu'une plateforme de communication par sms et emailing.
            </p>
            <p className={styles.inherit}>
              Suite à cette riche expérience en start-up, j'ai passé cinq ans au sein d'une équipe de développement pour participer au
              développement d'un logiciel de rédaction d'acte pour les cabinets notaire.
            </p>
            <p className={styles.inherit}>Fort de ces expériences, je rejoins maintenant le monde du freelance pour proposer des outils b2b adaptés pour
              les indépendants, artisants et PME nécessitant les services d'un développeur.

              <br/><br/>
              Lorsque je ne suis pas sur l'ordinateur, je suis généralement en montagne à faire de l'alpinisme, de l'escalade ou du ski. Certaines de mes aventures sont d'ailleurs disponibles sur <Link to="https://www.carnet-de-montagne.com/" target="_blank" className={styles.link}>mon blog</Link>.
            </p>

            <ul id="experience" className={styles.expBloc}>
            {experiences.map(exp => (
              <li key={exp.title}>
                <Link target="_blank" to={exp.link}>
                <div className={[styles.expItem, exp.link ? styles.hasLink : ``].join(" ")}>
                  <header>{exp.range}</header>
                  <div>
                    <h3>
                      {exp.title} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className={styles.arrow} fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                    </h3>
                    <div className={styles.sub}>{exp.sub}</div>
                    <p className={styles.desc}>{exp.desc}</p>
                    <div className={styles.tags}>
                      {exp.tags?.map(tag => (
                        <span className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                </Link>
              </li>
            ))}
          </ul>
          </div>

          <div id="projets" className={styles.projBloc}>
            <ul>
            {projects.map(proj => (
              <li key={proj.title}>
                <div className={styles.projItem}>
                  <header><img src={proj.image} /></header>
                  <div>
                    <h3>{proj.title}</h3>
                    <div className={styles.desc} dangerouslySetInnerHTML={{ __html: proj.desc }} />
                  </div>
                </div>
              </li>
              ))}
            </ul>
          </div>
          
          {moreLinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <a href={`${link.url}${utmParameters}`}>{link.text}</a>
              {i !== moreLinks.length - 1 && <> · </>}
            </React.Fragment>
          ))}
        </section>
      </div>
    </Layout>
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Accueil" />

export default IndexPage
