import { Link } from "react-router-dom"
import Logo from "./Logo"

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo-link">
          <Logo />
        </Link>

        <nav className="navigation">
          <Link to="/">Home</Link>
        </nav>
      </div>
    </header>
  )
}