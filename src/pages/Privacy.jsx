import Header from "../components/Header"
import { Link } from "react-router-dom"

export default function Terms() {
  return (
    <div className="page">
      <Header />

      <main className="legal-page">
        <div className="legal-header">
          <h1>Privātuma politika</h1>
          <p>
            Mēs Jūs aicinam izlasīt mūsu privātuma politiku uzmanīgi pirms izmantojot Penny aplikāciju.
          </p>
          <small>Augusts 22, 2026</small>
        </div>

        <div className="legal-layout">
          <aside className="legal-navigation">
            <a href="#introduction">Ievads</a>
            <a href="#information">Mūsu apkopotā informācija</a>
            <a href="#use">Kā mēs izmantojam Jūsu datus</a>
            <a href="#sharing">Informācijas dalīšanās</a>
            <a href="#acceptable-use">Piemērota lietošana</a>
            <a href="#retention">Datu saglabāšana</a>
            <a href="#rights">Jūsu tiesības</a>
            <a href="#security">Aizsardzība</a>
            <a href="#changes">Izmaiņas</a>
            <a href="#contact">Kontaktēt mūs</a>
          </aside>

          <article className="legal-content">
            <section id="introduction">
              <h2>1. Ievads</h2>
              <p>
Mēs respektējam jūsu privātumu un esam apņēmušies aizsargāt jūsu personas datus. Šajā privātuma politikā ir paskaidrots, kādu informāciju mēs apkopojam, kāpēc mēs to apkopojam un kā mēs to izmantojam, kad jūs piekļūstat mūsu pakalpojumam vai to izmantojat.
              </p>
            </section>

            <section id="information">
              <h2>2. Mūsu apkopotā informācija</h2>

              <p>
                Atkarībā no tā, kā jūs izmantojat pakalpojumu, mēs varam apkopot šādas informācijas kategorijas:
              </p>

              <ul>
                <li>
                  <strong>Konta informācija</strong>, kā Jūsu tālruņa numurs.
                </li>

                <li>
                  <strong>Lietošanas informācija</strong>, kā piedāvājumus Jūs saņemat un citus aplikācijas lietošanas datus.
                </li>

                <li>
                  <strong>Ierīces un tehniskā informācija</strong>, kā IP adreses, ierīces tips, ražotājs un cita informācija kā Jūs izmantojat mūsu pakalpojumu.
                </li>

                <li>
                  <strong>Lokācijas informācija</strong>, kas ir nepieciešama, lai izmantotu aplikāciju. Mēs neizmantojam Jūsu lokāciju kamēr aplikācija ir aizverta.
                </li>
              </ul>
            </section>

            <section id="use">
              <h2>3. Kā mēs izmantojam Jūsu datus</h2>

              <p>
                Mēs izmantojam Jūsu datus, lai:
              </p>

              <ul>
                <li>Nodrošināt un pārvaldīt pakalpojumu.</li>
                <li>Izveidotu un pārvaldītu kontus.</li>
                <li>Autentificēt lietotājus un aizsargāt kontus.</li>
                <li>Rādīt personalizētus piedāvājumus un restorānus tavā apkaimē.</li>
                <li>Apstrādāt un reģistrēt piedāvājumus un to darbības.</li>
                <li>Sazināties ar Jums par pakalpojumu.</li>
                <li>Uzlabot aplikāciju un tās funkcionalitāti.</li>
                <li>Atklāt, izmeklēt un novērst krāpšanu vai ļaunprātīgu izmantošanu.</li>
                <li>Ievērot piemērojamās juridiskās saistības.</li>
              </ul>
            </section>

            <section id="sharing">
              <h2>4. Informācijas dalīšanās</h2>

              <p>
Mēs varam kopīgot informāciju ar pakalpojumu sniedzējiem, kas mums palīdz pārvaldīt platformu, piemēram, mitināšanas, autentifikācijas, analītikas, komunikāciju un infrastruktūras pakalpojumu sniedzējiem.
              </p>

              <p>
Mēs varam arī izpaust informāciju, ja to pieprasa likums vai ja tas ir pamatoti nepieciešams, lai aizsargātu mūsu tiesības, lietotājus vai pakalpojuma drošību.
              </p>

              <p>Mēs nepārdodam Jūsu personas informāciju.
              </p>
            </section>

            <section id="cookies">
              <h2>5. Sīkdatnes un "device fingerprint"</h2>

              <p>
Mēs varam izmantot sīkfailus un līdzīgas tehnoloģijas, lai jūs paliktu pieteicies, atcerētos preferences, uzturētu drošību, saprastu, kā pakalpojums tiek izmantots, un uzlabotu jūsu pieredzi.
              </p>

              <p>
Dažas sīkdatnes var nodrošināt trešo pušu pakalpojumi, kurus mēs izmantojam platformas darbībai vai analīzei.
              </p>
              <p>
Mēs izmantojam ierīces pirkstu nospiedumus ("device fingerprints"), lai novērstu ļaunprātīgu aplikācijas izmantošanu. Pirkstu nospiedums tiek veidots no Jūsu ierīces tipa, ražotāja, aplikācijas unikālo instalēšanas kodu un citiem sistēmas datiem. 
              </p>
            </section>

            <section id="retention">
              <h2>6. Datu saglabāšana</h2>

              <p>
Mēs saglabājam personas informāciju tikai tik ilgi, cik tas ir pamatoti nepieciešams šajā Privātuma politikā aprakstītajiem mērķiem, tostarp, lai sniegtu pakalpojumu, izpildītu juridiskās saistības, risinātu strīdus un izpildītu mūsu līgumus.
              </p>
            </section>

            <section id="rights">
              <h2>7. Jūsu tiesības</h2>

              <p>
Atkarībā no jūsu atrašanās vietas un piemērojamajiem tiesību aktiem jums var būt tiesības attiecībā uz jūsu personas datiem, tostarp tiesības uz:
              </p>

              <ul>
                <li>Pieprasīt piekļuvi jūsu personas datiem.</li>
                <li>Pieprasīt neprecīzas informācijas labošanu.</li>
                <li>Pieprasīt noteiktu personas datu dzēšanu.</li>
                <li>Pieprasīt noteiktas apstrādes ierobežošanu.</li>
                <li>Iebilst pret noteiktiem apstrādes veidiem.</li>
                <li>Pieprasīt noteiktas informācijas pārnesamību.</li>
                <li>Atsaukt piekrišanu, ja apstrāde pamatojas uz piekrišanu.</li>
              </ul>

              <p>
Lai īstenotu piemērojamās tiesības, lūdzu, sazinieties ar mums, izmantojot tālāk sniegto informāciju.
              </p>
            </section>

            <section id="security">
              <h2>8. Aizsardzība</h2>

              <p>
                Mēs izmantojam saprātīgus tehniskus un organizatoriskus pasākumus,
kas paredzēti, lai aizsargātu personas informāciju pret neatļautu
piekļuvi, nozaudēšanu, ļaunprātīgu izmantošanu, mainīšanu vai izpaušanu.
              </p>

              <p>
Tomēr neviena informācijas pārsūtīšanas vai glabāšanas metode nevar garantēt pilnīgu drošību, tāpēc mēs aicinam aizsargāt Jūsu pieejas datus, lai novērstu neatļautu piekļuvi Jūsu kontam.
              </p>
            </section>

            <section id="changes">
              <h2>9. Izmaiņas</h2>
              <p>
                Nepieciešamības gadijumā, mēs varam veikt izmaiņas mūsu privātuma politikai. Jūs saņemsiet paziņojumu Penny aplikācijā izmaiņu laikā. Piekrišana jaunajai privātuma politikai ir obligāta pirms tālākas aplikācijas lietošanas.
              </p>
            </section>

            <section id="contact">
              <h2>10. Kontaktēt mūs</h2>
              <p>
                Ja Jums ir kādi jautājumi par mūsu privātikas politiku, mēs laipni lūzam mūs kontaktēt caur Penny aplikāciju.
              </p>
            </section>
          </article>
        </div>
      </main>

      <footer className="site-footer">
        <span>© 2026 Penny</span>

        <div>
            <Link to="/terms">Lietošanas noteikumi</Link>
        </div>
      </footer>
    </div>
  )
}