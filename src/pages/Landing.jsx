import { Link } from "react-router-dom"
import Header from "../components/Header"
import Logo from "../components/Logo"

export default function Landing() {
  return (
    <div className="page">
      <Header />

      <main>
        <section className="hero">
          <div className="hero-content">

            <h1>
              Veicam mājaslapas uzlabojumus
            </h1>

            <p className="hero-description">
              Jau drīz būsim atpakaļ, paldies par Jūsu interesi!
            </p>
            <p className="hero-description">
              - Penny komanda
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <Logo />

        <div>
          <Link to="/terms">Lietošanas noteikumi</Link>
          <Link to="/privacy">Privātuma poltika</Link>
        </div>
      </footer>
    </div>
  )
}