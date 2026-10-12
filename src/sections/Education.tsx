import { motion } from "framer-motion";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import { education } from "../data/education";
import { useLanguage } from "../context/LanguageContext";
import hdmLogo from "../assets/education/hdm_logo.svg";
import htwkLogo from "../assets/education/htwk_logo_black.svg";

interface InstitutionLogo {
  src: string;
  alt: string;
  className?: string;
}

const institutionLogos: Record<string, InstitutionLogo> = {
  "Hochschule der Medien Stuttgart": {
    src: hdmLogo,
    alt: "Hochschule der Medien Stuttgart",
    className: "w-14",
  },
  "Hochschule der Medien, Stuttgart": {
    src: hdmLogo,
    alt: "Hochschule der Medien Stuttgart",
    className: "w-14",
  },
  "Hochschule für Technik, Wirtschaft und Kultur Leipzig": {
    src: htwkLogo,
    alt: "HTWK Leipzig",
    className: "w-14 invert",
  },
  "Hochschule für Technik, Wirtschaft und Kultur, Leipzig": {
    src: htwkLogo,
    alt: "HTWK Leipzig",
    className: "w-14 invert",
  },
};

function getInstitutionLogo(institution: string): InstitutionLogo | undefined {
  if (institutionLogos[institution]) {
    return institutionLogos[institution];
  }
  if (institution.includes("Hochschule der Medien") || institution.includes("HdM")) {
    return institutionLogos["Hochschule der Medien, Stuttgart"];
  }
  if (
    institution.includes("Hochschule für Technik, Wirtschaft und Kultur") ||
    institution.includes("HTWK") ||
    institution.includes("Leipzig")
  ) {
    return institutionLogos["Hochschule für Technik, Wirtschaft und Kultur, Leipzig"];
  }
  return undefined;
}

export default function Education() {
  const { t, lang } = useLanguage();

  return (
    <Section id="education" title={t.sections.education}>
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        {education.map((entry, i) => {
          const field = entry.field[lang];
          const description = entry.description?.[lang];
          const period =
            typeof entry.period === "string" ? entry.period : entry.period[lang];
          const logo = getInstitutionLogo(entry.institution);

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card key={lang}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="font-semibold text-text-primary text-lg">
                      {entry.degree} · {field}
                    </span>
                    <div className="text-text-muted text-sm mt-0.5 mb-1">
                      {period}
                    </div>
                    <div className="text-accent text-sm font-medium mb-3">
                      {entry.institution}
                    </div>
                    {description && (
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {description}
                      </p>
                    )}
                  </div>
                  {logo && (
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={`shrink-0 mt-0.5 object-contain ${logo.className ?? "w-14"}`}
                    />
                  )}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
