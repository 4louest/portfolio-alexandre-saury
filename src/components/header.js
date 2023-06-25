import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/logo_simple.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
        color: `#fff`,
      }}
    >
      <img
        alt="Alpes & Tech logo"
        height={20}
        style={{ margin: 0 }}
        src={logo}
      />
    </Link>

  </header>
)

export default Header
