/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let onMouseMoveRippleEffect = (e) => {
    // https://www.shipbit.de/blog/hover-ripple-button
    const rect = document.body.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / document.body.clientWidth) * 100;
    const y = ((e.clientY - rect.top) / document.body.clientHeight) * 100;

    document.body.style.background = `radial-gradient(circle closest-corner 
      at ${x}% ${y}%, var(--ripple-color), var(--bg-color))`;
  };


  React.useEffect(() => {
    document.body.addEventListener('mousemove', onMouseMoveRippleEffect);
    document.body.addEventListener("mouseleave", (event) => {
      document.body.style.removeProperty("background");
    });
  });

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
