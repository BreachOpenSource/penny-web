import Header from "../components/Header"
import { Link } from "react-router-dom"

export default function Terms() {
  return (
    <div className="page">
      <Header />

      <main className="legal-page">
        <div className="legal-header">
          <h1>Lietošanas noteikumi</h1>
          <p>
            Mēs Jūs aicinam izlasīt mūsu lietošanas noteikumus uzmanīgi pirms izmantojot Penny aplikāciju.
          </p>
          <small>Augusts 22, 2026</small>
        </div>

        <div className="legal-layout">
          <aside className="legal-navigation">
            <a href="#introduction">Ievads</a>
            <a href="#accounts">Konti</a>
            <a href="#offers">Piedāvājumi</a>
            <a href="#payments">Maksājumi</a>
            <a href="#acceptable-use">Piemērota lietošana</a>
            <a href="#liability">Atbildība</a>
            <a href="#termination">Kontu slēgšana</a>
            <a href="#changes">Izmaiņas</a>
            <a href="#contact">Kontaktēt mūs</a>
          </aside>

          <article className="legal-content">
            <section id="introduction">
              <h2>1. Ievads</h2>
              <p>
Šie lietošanas noteikumi regulē jūsu piekļuvi mūsu platformai un pakalpojumiem, kā arī to izmantošanu.

Piekļūstot pakalpojumam vai to lietojot, jūs piekrītat ievērot šos noteikumus.
              </p>
            </section>

            <section id="accounts">
              <h2>2. Konti</h2>
              <p>
Lai piekļūtu noteiktām funkcijām, jums, iespējams, būs jāizveido konts.
Jūs esat atbildīgs par precīzas informācijas sniegšanu un
sava konta akreditācijas datu drošību.
              </p>
              <p>
Jūs esat atbildīgs par darbībām, kas notiek, izmantojot jūsu kontu, ja vien tās nav izraisījuši apstākļi, kas ir ārpus jūsu kontroles.
              </p>
            </section>

            <section id="offers">
              <h2>3. Piedāvājumi</h2>
              <p>
Platformā redzamos piedāvājumus nodrošina iesaistītie uzņēmumi. Katram piedāvājumam var būt savi nosacījumi, derīguma termiņš, pieejamība un izmantošanas prasības.
              </p>
              <p>
Mēs negarantējam, ka katrs piedāvājums paliks spēkā vai
ka uzņēmums pieņems piedāvājumu ārpus tā norādītajiem nosacījumiem.
              </p>
            </section>

            <section id="payments">
              <h2>4. Maksājumi</h2>
              <p>
                Ja maksājumi ir pieejami, izmantojot pakalpojumu, var tikt piemēroti papildu noteikumi. Jebkura piemērojamā cena, maksa vai maksājuma saistības tiks norādītas pirms attiecīgā darījuma.
              </p>
            </section>

            <section id="acceptable-use">
              <h2>5. Piemērota lietošana</h2>
              <p>Jūs piekrītat nedarīt neiesaistīties sekošajās aktivitātes:</p>

              <ul>
                <li>Izmantot pakalpojumu nelegālām vajadzībām vai nolūkiem.</li>
                <li>Mēģināt kļūt neatļautu pieeju mūsu pakalpojumā.</li>
                <li>Ļaunprātīgi izmantot vai manipulēt piedāvājumus mūsu pakalpojumā.</li>
                <li>Mēģināt traucēt pakalpojuma darbību.</li>
              </ul>
            </section>

            <section id="liability">
              <h2>6. Atbildība</h2>
              <p>
                Ciktāl to atļauj piemērojamie tiesību akti, mūsu atbildība saistībā ar pakalpojumu ir ierobežota, kā aprakstīts šajos noteikumos. Nekas šajos noteikumos neizslēdz atbildību, ko nevar juridiski izslēgt.
              </p>
            </section>

            <section id="termination">
              <h2>7. Kontu slēgšana</h2>
              <p>
                Konti, kuri pārkāpj mūsu lietošanas noteikumus tiks slēgti bez iepriekšēja paziņojuma. Mēs aicinam visiem lietotājiem izmantot mūsu pakalpojumus godprātīgi, lai neizrastu sekas.
              </p>
            </section>

            <section id="changes">
              <h2>8. Izmaiņas</h2>
              <p>
                Nepieciešamības gadijumā, mēs varam veikt izmaiņas mūsu lietošanas noteikumos. Jūs saņemsiet paziņojumu Penny aplikācijā izmaiņu laikā. Piekrist jaunajiem noteikumiem ir obligāti pirms tālākas aplikācijas lietošanas.
              </p>
            </section>

            <section id="contact">
              <h2>9. Kontaktēt mūs</h2>
              <p>
                Ja Jums ir kādi jautājumi par mūsu lietošanas noteikumiem, mēs laipni lūzam mūs kontaktēt caur Penny aplikāciju.
              </p>
            </section>
          </article>
        </div>
      </main>

      <footer className="site-footer">
        <span>© 2026 Penny</span>

        <div>
            <Link to="/privacy">Privātuma politika</Link>
        </div>
      </footer>
    </div>
  )
}