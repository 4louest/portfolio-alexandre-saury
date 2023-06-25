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
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    range: "2017 - 2022",
    title: "Ingénieur d'étude Fiducial Informatique",
    sub: "Développeur fullstack Java & Angular",
    desc:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    range: "2013 - 2017",
    title: "Dirigeant d'entreprise 4lcom",
    sub: "CEO & Développeur Symfony, AngularJS, Node, Objective C",
    desc:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    range: "2009 - 2011",
    title: "Développeur d'application chez Ooxiem",
    sub: "Développeur .net, flex, php",
    desc:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
  {
    range: "2008 - 2010",
    title: "Développeur web chez Attrait",
    sub: "Développeur web PHP & html/css/Jquery",
    desc:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

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
              Passionné depuis toujours par l'informatique et le développement, j'ai créé ma première société en 2013.
              Avec 4 associés, nous avons développé tout un écosystème à destination de chaînes de restauration. Notre solutions intègre entre autres,
              une application d'encaissement, un système de commande centralisé avec un BI piloté grâce à ElasticSearch,
              des canaux de commande (site internet, application mobile, borne de commande interactive) et des outils marketing tels qu'une
              plateforme de communication par sms et emailing.
            </p>
            <p className={styles.inherit}>
              Suite à cette riche expérience en start-up, j'ai passé cinq ans au sein d'une équipe de développement pour participer au
              développement d'un logiciel de rédaction d'acte pour les cabinets notaire.
            </p>
            <p className={styles.inherit}>Fort de ces expériences, je rejoins maintenant le monde du freelance pour proposer des outils b2b adaptés pour
              les indépendants, artisants et PME nécessitant les services d'un développeur.
            </p>
          </div>
          <ul id="experience">
            {experiences.map(exp => (
              <li key={exp.title}>
                <div className={styles.expItem}>
                  <header>{exp.range}</header>
                  <div>
                    <h3>{exp.title}</h3>
                    <div className={styles.sub}>{exp.sub}</div>
                    <p className={styles.desc}>{exp.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {moreLinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <a href={`${link.url}${utmParameters}`}>{link.text}</a>
              {i !== moreLinks.length - 1 && <> · </>}
            </React.Fragment>
          ))}
          <p id="projets">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non tellus luctus, ultrices tortor accumsan, posuere odio. Duis gravida orci lorem, a consectetur arcu varius hendrerit. Integer eu facilisis erat. Aenean vel sodales justo. Pellentesque hendrerit at sapien sit amet tristique. Ut a scelerisque nisi. Etiam vehicula id libero id fringilla. Sed a vulputate sapien.

            Morbi hendrerit justo lectus, sit amet venenatis risus varius placerat. Suspendisse potenti. Cras consequat rhoncus nunc non tincidunt. Aliquam in cursus nunc. Etiam nec libero id nulla tristique tempus at eu nunc. Etiam vitae elementum dolor. Donec ac erat libero. Ut condimentum quis ante at eleifend. Donec sed nisi molestie, blandit erat ut, sagittis ipsum. Ut rutrum ligula ante, id rutrum ex congue vitae. Etiam venenatis dui a risus tempor placerat. Etiam sit amet turpis sit amet libero egestas congue.

            Mauris in felis sed risus ullamcorper ullamcorper eget eu nibh. Aenean cursus tellus pulvinar ipsum pulvinar, ut rhoncus dolor viverra. Ut tristique lacinia diam, a ultricies neque tristique at. Ut gravida magna ipsum, eget venenatis mi ultricies pharetra. Vestibulum nec tristique ligula. Donec ut aliquet orci. Maecenas semper imperdiet dui, in pulvinar metus euismod at. Pellentesque sapien nisl, dictum sit amet felis a, iaculis cursus eros. Nullam volutpat ultrices commodo. Suspendisse vulputate nulla eget mauris sodales feugiat.

            Ut fringilla eget nulla vel vulputate. Etiam quis scelerisque ipsum. Nulla egestas lorem mollis, gravida ante ac, egestas tellus. Nam nec turpis eu magna tempor vehicula. Praesent sit amet semper sapien. Sed eget purus quis metus varius aliquet. Quisque in lectus vestibulum, sagittis ante eu, lacinia enim.

            Aliquam maximus massa felis, id pharetra diam gravida a. Aenean lobortis dictum erat iaculis varius. Proin magna arcu, efficitur sed odio in, aliquet malesuada arcu. Cras fringilla arcu magna, interdum egestas orci blandit sit amet. Etiam interdum ornare erat, sed sagittis eros. Integer convallis nulla feugiat lorem sodales commodo sed sit amet magna. Nam eget justo urna. Nunc tristique, lacus at pharetra finibus, magna odio tincidunt sapien, nec pretium nisi leo et orci. In sit amet dui ultricies dui vestibulum lacinia id id risus. Ut tincidunt ullamcorper urna, vel molestie nulla iaculis et. Fusce a purus vel justo ornare finibus. Nullam commodo lectus elit, ac aliquet massa ornare id. Vivamus at eleifend ipsum, at efficitur odio. Nullam sagittis nulla id augue dapibus semper. Pellentesque faucibus nec nulla et tempor. Curabitur aliquam faucibus lectus nec ornare.</p>
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
