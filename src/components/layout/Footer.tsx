import { useState } from "react";
import LegalModal from "../ui/LegalModal";

export default function Footer() {
  const [modal, setModal] = useState<"impressum" | "datenschutz" | null>(null);

  return (
    <>
      <footer className="border-t border-border py-8 text-center text-text-muted text-sm">
        <p>© {new Date().getFullYear()} Julius Beutel</p>
        <div className="flex justify-center gap-6 mt-3">
          <button
            onClick={() => setModal("impressum")}
            className="hover:text-text-secondary transition-colors"
          >
            Impressum
          </button>
          <button
            onClick={() => setModal("datenschutz")}
            className="hover:text-text-secondary transition-colors"
          >
            Datenschutz
          </button>
        </div>
      </footer>

      {/* ── Impressum ─────────────────────────────────────────────────────── */}
      <LegalModal
        title="Impressum"
        open={modal === "impressum"}
        onClose={() => setModal(null)}
      >
        <p className="text-text-muted text-xs">Angaben gemäß § 5 TMG</p>

        <div>
          <p className="font-medium text-text-primary">Julius Beutel</p>
          <p>Seracher Straße 87</p>
          <p>73732 Esslingen</p>
          <p>Deutschland</p>
        </div>

        <div>
          <p className="font-medium text-text-primary mb-1">Kontakt</p>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:beutel.julius@gmx.de"
              className="text-accent hover:underline"
            >
              beutel.julius@gmx.de
            </a>
          </p>
        </div>

        <div>
          <p className="font-medium text-text-primary mb-1">
            Haftung für Inhalte
          </p>
          <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann
            jedoch keine Gewähr übernommen werden. Als Diensteanbieter bin ich
            gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich
            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen. Eine diesbezügliche
            Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
            konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
            entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend
            entfernen.
          </p>
        </div>

        <div>
          <p className="font-medium text-text-primary mb-1">
            Haftung für Links
          </p>
          <p>
            Diese Website enthält Links zu externen Websites Dritter, auf deren
            Inhalte ich keinen Einfluss habe. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber
            verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
            Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
            permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
            ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
          </p>
        </div>

        <div>
          <p className="font-medium text-text-primary mb-1">Urheberrecht</p>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht.
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des Autors. Downloads und Kopien dieser
            Seite sind nur für den privaten, nicht kommerziellen Gebrauch
            gestattet.
          </p>
        </div>
      </LegalModal>

      {/* ── Datenschutzerklärung ───────────────────────────────────────────── */}
      <LegalModal
        title="Datenschutzerklärung"
        open={modal === "datenschutz"}
        onClose={() => setModal(null)}
      >
        <p className="text-text-muted text-xs">
          Stand: {new Date().getFullYear()}
        </p>

        <div>
          <p className="font-medium text-text-primary mb-1">
            1. Verantwortlicher
          </p>
          <p>
            Verantwortlicher im Sinne der DSGVO für diese Website ist:
            <br />
            Julius Beutel, [Straße und Hausnummer], [PLZ] [Stadt]
            <br />
            E-Mail:{" "}
            <a
              href="mailto:beutel.julius@gmx.de"
              className="text-accent hover:underline"
            >
              beutel.julius@gmx.de
            </a>
          </p>
        </div>

        <div>
          <p className="font-medium text-text-primary mb-1">
            2. Erhobene Daten beim Seitenbesuch
          </p>
          <p>
            Diese Website erhebt selbst keine personenbezogenen Daten aktiv.
            Beim Abruf dieser Website verarbeitet der Hosting-Anbieter
            automatisch technische Zugriffsdaten in Server-Logfiles:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-text-muted">
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit des Abrufs</li>
            <li>Aufgerufene URL</li>
            <li>Verwendeter Browser und Betriebssystem</li>
            <li>Referrer-URL (zuvor besuchte Seite)</li>
          </ul>
          <p className="mt-2">
            Diese Daten sind technisch erforderlich, um die Website
            auszuliefern, und werden nicht mit anderen Datenquellen
            zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an einer technisch fehlerfreien
            Bereitstellung).
          </p>
        </div>

        <div>
          <p className="font-medium text-text-primary mb-1">
            3. Kontaktaufnahme per E-Mail
          </p>
          <p>
            Wenn Sie über den auf dieser Website angegebenen E-Mail-Link Kontakt
            aufnehmen, werden die von Ihnen übermittelten Daten (Ihre
            E-Mail-Adresse sowie der Inhalt Ihrer Nachricht) zur Bearbeitung
            Ihrer Anfrage gespeichert. Diese Daten werden nicht ohne Ihre
            ausdrückliche Einwilligung an Dritte weitergegeben. Rechtsgrundlage
            ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </div>

        <div>
          <p className="font-medium text-text-primary mb-1">4. Cookies</p>
          <p>Diese Website verwendet keine Cookies.</p>
        </div>

        <div>
          <p className="font-medium text-text-primary mb-1">
            5. Analyse-Tools und Drittanbieter
          </p>
          <p>
            Diese Website verwendet keine Web-Analyse-Dienste (z. B. Google
            Analytics) und bindet keine Dienste von Drittanbietern ein, die
            personenbezogene Daten erheben.
          </p>
        </div>

        <div>
          <p className="font-medium text-text-primary mb-1">
            6. SSL/TLS-Verschlüsselung
          </p>
          <p>
            Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw.
            TLS-Verschlüsselung für die Übertragung von Daten. Eine
            verschlüsselte Verbindung erkennen Sie an dem „https://"-Präfix in
            der Adresszeile Ihres Browsers.
          </p>
        </div>

        <div>
          <p className="font-medium text-text-primary mb-1">
            7. Ihre Rechte als betroffene Person
          </p>
          <p>Ihnen stehen gemäß DSGVO folgende Rechte zu:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-text-muted">
            <li>Auskunft über gespeicherte Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
          </ul>
          <p className="mt-2">
            Anfragen richten Sie bitte an:{" "}
            <a
              href="mailto:beutel.julius@gmx.de"
              className="text-accent hover:underline"
            >
              beutel.julius@gmx.de
            </a>
          </p>
        </div>

        <div>
          <p className="font-medium text-text-primary mb-1">
            8. Zuständige Aufsichtsbehörde
          </p>
          <p>
            Der Landesbeauftragte für den Datenschutz und die
            Informationsfreiheit Baden-Württemberg
            <br />
            Lautenschlagerstraße 20
            <br />
            70173 Stuttgart
            <br />
            <a
              href="https://www.baden-wuerttemberg.datenschutz.de"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.baden-wuerttemberg.datenschutz.de
            </a>
          </p>
        </div>
      </LegalModal>
    </>
  );
}
