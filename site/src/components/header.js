import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <Link to="/">
      <img src="/img/blockDAG_logo.png" alt="BlockDAG Logo" width="250" />
    </Link>
    <a href="https://twitter.com/blockdag_xyz" className="right-side">
      <img src="/img/blockdag_x_handle.png" alt="BlockDAG Twitter" width="200" />
    </a>
  </header>
)

export default Header
