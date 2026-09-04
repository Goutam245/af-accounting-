import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/ui-bits";
import { useLang } from "@/i18n/LanguageContext";

type Kind = "privacy" | "terms";

const copy = {
  privacy: {
    title: { en: "Privacy", fr: "Confidentialité" },
    accent: { en: "Policy", fr: "Politique" },
    sub: {
      en: "How AF Accounting collects, uses and protects your information.",
      fr: "Comment AF Accounting recueille, utilise et protège vos renseignements.",
    },
    body: {
      en: [
        "We collect only the information you provide to us — such as your name, email, business name and revenue range — so we can respond to your enquiry and deliver our bookkeeping, tax and payroll services.",
        "Your information is never sold or rented. We share data only with the accounting platforms required to deliver your service (for example Xero, QuickBooks Online or your payroll provider), and only where necessary.",
        "Client records are retained as required by Canadian and Quebec tax legislation and are stored in secure, access-controlled cloud systems.",
        "You may request access to, correction of, or deletion of your personal information at any time by emailing info@afaccounting.ca.",
      ],
      fr: [
        "Nous recueillons uniquement les renseignements que vous nous fournissez — nom, courriel, nom de l'entreprise et fourchette de revenus — afin de répondre à votre demande et de fournir nos services de tenue de livres, de fiscalité et de paie.",
        "Vos renseignements ne sont jamais vendus ni loués. Nous les partageons uniquement avec les plateformes comptables nécessaires à la prestation du service (par exemple Xero, QuickBooks Online ou votre fournisseur de paie), et seulement au besoin.",
        "Les dossiers clients sont conservés conformément aux lois fiscales canadiennes et québécoises, dans des systèmes infonuagiques sécurisés à accès contrôlé.",
        "Vous pouvez demander l'accès, la correction ou la suppression de vos renseignements personnels en tout temps à info@afaccounting.ca.",
      ],
    },
  },
  terms: {
    title: { en: "Terms of", fr: "Conditions" },
    accent: { en: "Service", fr: "d'utilisation" },
    sub: {
      en: "The terms that apply to this website and our engagements.",
      fr: "Les conditions applicables à ce site web et à nos mandats.",
    },
    body: {
      en: [
        "The content on this website is provided for general information only and does not constitute accounting, tax or legal advice for your specific situation.",
        "Every engagement begins with a written scope of work confirming the services, deliverables and fees. Fees quoted on this site are indicative and depend on transaction volume and complexity.",
        "You remain responsible for the accuracy and completeness of the records and documents you provide to us.",
        "Questions about these terms? Email info@afaccounting.ca and we will be glad to clarify.",
      ],
      fr: [
        "Le contenu de ce site est fourni à titre d'information générale seulement et ne constitue pas un avis comptable, fiscal ou juridique adapté à votre situation.",
        "Chaque mandat débute par une portée de travail écrite confirmant les services, les livrables et les honoraires. Les tarifs indiqués sur ce site sont indicatifs et varient selon le volume et la complexité des transactions.",
        "Vous demeurez responsable de l'exactitude et de l'exhaustivité des registres et documents que vous nous transmettez.",
        "Des questions sur ces conditions? Écrivez-nous à info@afaccounting.ca.",
      ],
    },
  },
} as const;

export const Legal = ({ kind }: { kind: Kind }) => {
  const { lang, t } = useLang();
  const c = copy[kind];

  return (
    <>
      <PageHero
        title={c.title[lang]}
        accent={c.accent[lang]}
        sub={c.sub[lang]}
        crumb={`${c.title[lang]} ${c.accent[lang]}`}
      />
      <Section>
        <div className="max-w-[760px] mx-auto space-y-5 text-[15px] md:text-base text-body leading-relaxed">
          {c.body[lang].map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="pt-4">
            <Link to="/contact" className="btn-primary">
              {t("Contact us", "Nous joindre")}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Legal;
