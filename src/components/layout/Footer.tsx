import { useState } from 'react';
import LegalModal from '../ui/LegalModal';
import { useLanguage } from '../../context/LanguageContext';

function LegalNoticeEN() {
  return (
    <>
      <p className="text-text-muted text-xs">Information pursuant to § 5 TMG (German Telemedia Act)</p>

      <div>
        <p className="font-medium text-text-primary">Julius Beutel</p>
        <p>Seracher Straße 87</p>
        <p>73732 Esslingen</p>
        <p>Germany</p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">Contact</p>
        <p>Email: <a href="mailto:beutel.julius@gmx.de" className="text-accent hover:underline">beutel.julius@gmx.de</a></p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">Content Liability</p>
        <p>
          The contents of this website have been created with the utmost care. However, I cannot
          guarantee their accuracy, completeness, or topicality. As a service provider I am
          responsible for my own content on these pages under general law pursuant to § 7(1) TMG.
          According to §§ 8–10 TMG, however, I am not obligated to monitor transmitted or stored
          third-party information. If violations become known, I will remove such content immediately.
        </p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">External Links</p>
        <p>
          This website contains links to external third-party websites over whose content I have no
          influence. The respective provider or operator is always responsible for the content of
          linked pages. All linked pages were checked for legal violations at the time of linking;
          no illegal content was apparent at that time. Permanent monitoring of linked pages is not
          reasonable without concrete evidence of a violation.
        </p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">Copyright</p>
        <p>
          The content and works on this website are subject to German copyright law. Reproduction,
          editing, distribution, or any kind of exploitation beyond the limits of copyright law
          require the written consent of the author. Downloads and copies of this site are
          permitted for private, non-commercial use only.
        </p>
      </div>
    </>
  );
}

function LegalNoticeDE() {
  return (
    <>
      <p className="text-text-muted text-xs">Angaben gemäß § 5 TMG</p>

      <div>
        <p className="font-medium text-text-primary">Julius Beutel</p>
        <p>Seracher Straße 87</p>
        <p>73732 Esslingen</p>
        <p>Deutschland</p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">Kontakt</p>
        <p>E-Mail: <a href="mailto:beutel.julius@gmx.de" className="text-accent hover:underline">beutel.julius@gmx.de</a></p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">Haftung für Inhalte</p>
        <p>
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
          Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
          entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
        </p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">Haftung für Links</p>
        <p>
          Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen
          Einfluss habe. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
          oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
          auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
          Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten
          ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
        </p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">Urheberrecht</p>
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
          des Autors. Downloads und Kopien dieser Seite sind nur für den privaten, nicht
          kommerziellen Gebrauch gestattet.
        </p>
      </div>
    </>
  );
}

function PrivacyPolicyEN() {
  return (
    <>
      <p className="text-text-muted text-xs">Last updated: {new Date().getFullYear()}</p>

      <div>
        <p className="font-medium text-text-primary mb-1">1. Controller</p>
        <p>
          The controller for data processing on this website is:<br />
          Julius Beutel, Seracher Straße 87, 73732 Esslingen, Germany<br />
          Email: <a href="mailto:beutel.julius@gmx.de" className="text-accent hover:underline">beutel.julius@gmx.de</a>
        </p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">2. Data Collected During Your Visit</p>
        <p>
          This website does not actively collect personal data. When you visit, the hosting
          provider automatically stores technical access data in server log files:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-text-muted">
          <li>IP address of the requesting device</li>
          <li>Date and time of the request</li>
          <li>URL accessed</li>
          <li>Browser and operating system used</li>
          <li>Referring URL (previously visited page)</li>
        </ul>
        <p className="mt-2">
          This data is technically required to deliver the website and is not merged with other
          data sources. Legal basis: Art. 6(1)(f) GDPR (legitimate interest in technically
          flawless provision of the website).
        </p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">3. Contact via Email</p>
        <p>
          If you contact me using the email link on this website, the data you submit (your email
          address and message content) will be stored to process your request. This data will not
          be shared with third parties without your explicit consent. Legal basis: Art. 6(1)(f) GDPR.
        </p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">4. Cookies</p>
        <p>This website does not use cookies.</p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">5. Analytics and Third-Party Services</p>
        <p>
          This website does not use web analytics services (e.g. Google Analytics) and does not
          embed any third-party services that collect personal data.
        </p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">6. SSL/TLS Encryption</p>
        <p>
          This website uses SSL/TLS encryption for data transmission. You can recognise an
          encrypted connection by the "https://" prefix in your browser's address bar.
        </p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">7. Your Rights</p>
        <p>Under the GDPR, you have the following rights:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-text-muted">
          <li>Right of access (Art. 15 GDPR)</li>
          <li>Right to rectification (Art. 16 GDPR)</li>
          <li>Right to erasure (Art. 17 GDPR)</li>
          <li>Right to restriction of processing (Art. 18 GDPR)</li>
          <li>Right to data portability (Art. 20 GDPR)</li>
          <li>Right to object (Art. 21 GDPR)</li>
          <li>Right to lodge a complaint with a supervisory authority (Art. 77 GDPR)</li>
        </ul>
        <p className="mt-2">
          To exercise your rights, please contact:{' '}
          <a href="mailto:beutel.julius@gmx.de" className="text-accent hover:underline">beutel.julius@gmx.de</a>
        </p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">8. Competent Supervisory Authority</p>
        <p>
          Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
          Lautenschlagerstraße 20, 70173 Stuttgart<br />
          <a href="https://www.baden-wuerttemberg.datenschutz.de" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
            www.baden-wuerttemberg.datenschutz.de
          </a>
        </p>
      </div>
    </>
  );
}

function PrivacyPolicyDE() {
  return (
    <>
      <p className="text-text-muted text-xs">Stand: {new Date().getFullYear()}</p>

      <div>
        <p className="font-medium text-text-primary mb-1">1. Verantwortlicher</p>
        <p>
          Verantwortlicher im Sinne der DSGVO für diese Website ist:<br />
          Julius Beutel, Seracher Straße 87, 73732 Esslingen<br />
          E-Mail: <a href="mailto:beutel.julius@gmx.de" className="text-accent hover:underline">beutel.julius@gmx.de</a>
        </p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">2. Erhobene Daten beim Seitenbesuch</p>
        <p>
          Diese Website erhebt selbst keine personenbezogenen Daten aktiv. Beim Abruf dieser
          Website verarbeitet der Hosting-Anbieter automatisch technische Zugriffsdaten in
          Server-Logfiles:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-text-muted">
          <li>IP-Adresse des anfragenden Rechners</li>
          <li>Datum und Uhrzeit des Abrufs</li>
          <li>Aufgerufene URL</li>
          <li>Verwendeter Browser und Betriebssystem</li>
          <li>Referrer-URL (zuvor besuchte Seite)</li>
        </ul>
        <p className="mt-2">
          Diese Daten sind technisch erforderlich, um die Website auszuliefern, und werden nicht
          mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an einer technisch fehlerfreien Bereitstellung).
        </p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">3. Kontaktaufnahme per E-Mail</p>
        <p>
          Wenn Sie über den auf dieser Website angegebenen E-Mail-Link Kontakt aufnehmen, werden
          die von Ihnen übermittelten Daten zur Bearbeitung Ihrer Anfrage gespeichert. Diese Daten
          werden nicht ohne Ihre ausdrückliche Einwilligung an Dritte weitergegeben.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">4. Cookies</p>
        <p>Diese Website verwendet keine Cookies.</p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">5. Analyse-Tools und Drittanbieter</p>
        <p>
          Diese Website verwendet keine Web-Analyse-Dienste (z. B. Google Analytics) und bindet
          keine Dienste von Drittanbietern ein, die personenbezogene Daten erheben.
        </p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">6. SSL/TLS-Verschlüsselung</p>
        <p>
          Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung für die
          Übertragung von Daten. Eine verschlüsselte Verbindung erkennen Sie an dem
          „https://"-Präfix in der Adresszeile Ihres Browsers.
        </p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">7. Ihre Rechte als betroffene Person</p>
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
          Anfragen richten Sie bitte an:{' '}
          <a href="mailto:beutel.julius@gmx.de" className="text-accent hover:underline">beutel.julius@gmx.de</a>
        </p>
      </div>

      <div>
        <p className="font-medium text-text-primary mb-1">8. Zuständige Aufsichtsbehörde</p>
        <p>
          Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
          Lautenschlagerstraße 20, 70173 Stuttgart<br />
          <a href="https://www.baden-wuerttemberg.datenschutz.de" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
            www.baden-wuerttemberg.datenschutz.de
          </a>
        </p>
      </div>
    </>
  );
}

export default function Footer() {
  const { lang, t } = useLanguage();
  const [modal, setModal] = useState<'legal' | 'privacy' | null>(null);

  return (
    <>
      <footer className="border-t border-border py-8 text-center text-text-muted text-sm">
        <p>© {new Date().getFullYear()} Julius Beutel</p>
        <div className="flex justify-center gap-6 mt-3">
          <button onClick={() => setModal('legal')} className="hover:text-text-secondary transition-colors">
            {t.footer.legalLabel}
          </button>
          <button onClick={() => setModal('privacy')} className="hover:text-text-secondary transition-colors">
            {t.footer.privacyLabel}
          </button>
        </div>
      </footer>

      <LegalModal title={t.footer.legalLabel} open={modal === 'legal'} onClose={() => setModal(null)}>
        {lang === 'en' ? <LegalNoticeEN /> : <LegalNoticeDE />}
      </LegalModal>

      <LegalModal title={t.footer.privacyLabel} open={modal === 'privacy'} onClose={() => setModal(null)}>
        {lang === 'en' ? <PrivacyPolicyEN /> : <PrivacyPolicyDE />}
      </LegalModal>
    </>
  );
}
