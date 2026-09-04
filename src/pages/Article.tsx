import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { FadeIn, Section } from "@/components/ui-bits";
import { PageHero } from "@/components/PageHero";
import { BOOKING_URL } from "@/lib/links";

type Doc = {
  cat: { en: string; fr: string };
  title: { en: string; fr: string };
  body: { en: string[]; fr: string[] };
};

export const articleDocs: Record<string, Doc> = {
  "qst-vs-gst": {
    cat: { en: "Tax", fr: "Impôts" },
    title: {
      en: "QST vs GST: What Quebec Business Owners Need to Know",
      fr: "TVQ vs TPS : Ce que les entrepreneurs québécois doivent savoir",
    },
    body: {
      en: [
        "Quebec businesses collect two sales taxes: the federal GST (5%) and the provincial QST (9.975%). Both are administered by Revenu Québec, which means one registration process but two separate calculations on every invoice.",
        "You must register once your taxable sales exceed $30,000 over four consecutive quarters. After that, filing frequency depends on your revenue — most small businesses file quarterly, while larger ones move to monthly remittances.",
        "The most common mistake we see is claiming input tax credits without proper documentation. Keep every supplier invoice showing their GST/QST numbers, and reconcile your tax accounts monthly instead of scrambling at filing time.",
      ],
      fr: [
        "Les entreprises québécoises perçoivent deux taxes de vente : la TPS fédérale (5 %) et la TVQ provinciale (9,975 %). Les deux sont administrées par Revenu Québec — une seule inscription, mais deux calculs distincts sur chaque facture.",
        "L'inscription est obligatoire dès que vos ventes taxables dépassent 30 000 $ sur quatre trimestres consécutifs. La fréquence de production dépend ensuite de votre chiffre d'affaires.",
        "L'erreur la plus fréquente : réclamer des crédits de taxe sur les intrants sans documentation adéquate. Conservez chaque facture fournisseur et réconciliez vos comptes de taxes chaque mois.",
      ],
    },
  },
  "outgrown-your-bookkeeper": {
    cat: { en: "Bookkeeping", fr: "Tenue de livres" },
    title: {
      en: "5 Signs You've Outgrown Your Bookkeeper",
      fr: "5 signes que vous avez dépassé votre teneur de livres",
    },
    body: {
      en: [
        "Growth changes what you need from your books. If your month-end close takes more than two weeks, that's the first sign your current setup can't keep pace.",
        "Other signals: you can't get a cash-flow answer without a phone call, sales tax filings arrive at the last minute, payroll errors keep repeating, and nobody is advising you on salary versus dividends.",
        "A modern cloud setup with a CPA-led team fixes all five — clean monthly reporting, proactive tax planning, and a single point of accountability.",
      ],
      fr: [
        "La croissance change vos besoins comptables. Si votre fermeture de mois prend plus de deux semaines, c'est le premier signe.",
        "Autres signaux : impossible d'obtenir une réponse sur vos flux de trésorerie sans appel, taxes produites à la dernière minute, erreurs de paie répétées, aucun conseil salaire vs dividende.",
        "Une configuration en nuage encadrée par un CPA règle les cinq : rapports mensuels clairs, planification fiscale proactive et un seul responsable.",
      ],
    },
  },
  "switch-to-cloud-accounting": {
    cat: { en: "Software", fr: "Logiciels" },
    title: {
      en: "How to Switch to Cloud Accounting Without Losing Your Data",
      fr: "Comment passer à la comptabilité en nuage sans perdre vos données",
    },
    body: {
      en: [
        "A migration should never risk your history. We start by locking a cutover date, then export trial balances, sub-ledgers, and full transaction detail from your existing system.",
        "Opening balances are entered and reconciled against the last filed return, so your new file matches what the CRA and Revenu Québec already have on record.",
        "We run both systems in parallel for one cycle, compare the numbers line by line, and only then decommission the old file. Nothing is deleted until everything ties out.",
      ],
      fr: [
        "Une migration ne doit jamais mettre votre historique en péril. Nous fixons une date de bascule, puis exportons balances, grands livres auxiliaires et détail des transactions.",
        "Les soldes d'ouverture sont réconciliés avec la dernière déclaration produite, afin que votre nouveau fichier corresponde aux données de l'ARC et de Revenu Québec.",
        "Nous faisons fonctionner les deux systèmes en parallèle pour un cycle, comparons ligne par ligne, puis seulement archivons l'ancien fichier.",
      ],
    },
  },
  "tax-deadline-calendar-2026": {
    cat: { en: "Tax", fr: "Impôts" },
    title: {
      en: "The Complete Quebec Corporate Tax Deadline Calendar for 2026",
      fr: "Calendrier complet des échéances fiscales du Québec 2026",
    },
    body: {
      en: [
        "Key 2026 dates for Quebec corporations: T4 and RL-1 slips are due January 31; T5 slips February 28; CO-17 provincial corporate returns March 31 for a December 31, 2025 year-end; T1 personal returns April 30; and T2 corporate returns June 30.",
        "QST, GST, and HST remittances fall on January 31, April 30, July 31, and October 31 for quarterly filers. CNESST instalments follow the same quarterly rhythm for employers.",
        "Interest and penalties accrue from the day after each deadline, so we set client reminders 30 days ahead and prepare filings in advance rather than on the due date.",
      ],
      fr: [
        "Dates clés 2026 pour les sociétés québécoises : feuillets T4 et RL-1 le 31 janvier; feuillets T5 le 28 février; CO-17 le 31 mars (exercice se terminant le 31 déc. 2025); T1 le 30 avril; T2 le 30 juin.",
        "Les versements TVQ, TPS et TVH sont dus les 31 janvier, 30 avril, 31 juillet et 31 octobre pour les déclarants trimestriels. Les acomptes CNESST suivent le même rythme.",
        "Les intérêts et pénalités courent dès le lendemain de chaque échéance : nous envoyons des rappels 30 jours à l'avance et préparons les déclarations en amont.",
      ],
    },
  },
  "xero-vs-quickbooks": {
    cat: { en: "Software", fr: "Logiciels" },
    title: {
      en: "Xero vs QuickBooks: Which is Right for Your Quebec Business?",
      fr: "Xero vs QuickBooks : Lequel pour votre entreprise québécoise?",
    },
    body: {
      en: [
        "Both platforms handle GST/QST correctly and both integrate with Canadian banks. The difference is in workflow.",
        "Xero shines for inventory-light service businesses, unlimited users, and clean bank reconciliation. QuickBooks Online has deeper Canadian payroll integration and reporting many owners already know.",
        "We support both. After a short review of your transaction volume, team size, and reporting needs, we recommend one — and handle the setup either way.",
      ],
      fr: [
        "Les deux plateformes gèrent correctement la TPS/TVQ et se connectent aux banques canadiennes. La différence est dans le flux de travail.",
        "Xero excelle pour les entreprises de services, avec utilisateurs illimités et réconciliation bancaire impeccable. QuickBooks Online offre une intégration de paie canadienne plus poussée.",
        "Nous soutenons les deux. Après une courte analyse de votre volume et de vos besoins, nous recommandons la meilleure option et gérons la configuration.",
      ],
    },
  },
  "accountant-cost-quebec-2026": {
    cat: { en: "Pricing", fr: "Tarifs" },
    title: {
      en: "How Much Does an Accountant Cost in Quebec? A Complete 2026 Guide",
      fr: "Combien coûte un comptable au Québec? Guide complet 2026",
    },
    body: {
      en: [
        "Pricing depends on transaction volume, number of bank accounts, payroll headcount, and whether you need advisory work alongside compliance.",
        "Most small Quebec corporations need monthly bookkeeping, quarterly sales tax filings, an annual corporate return, and payroll support. Bundling those into one package is almost always cheaper than buying them piecemeal.",
        "Our Grow, Thrive, and Elite packages are built around annual revenue bands so you know exactly what's included before you commit.",
      ],
      fr: [
        "Le prix dépend du volume de transactions, du nombre de comptes bancaires, du nombre d'employés et de vos besoins en conseil.",
        "La plupart des PME québécoises ont besoin de tenue de livres mensuelle, de taxes trimestrielles, d'une déclaration annuelle et d'un soutien à la paie. Un forfait regroupé coûte presque toujours moins cher.",
        "Nos forfaits Grow, Thrive et Elite sont bâtis selon des tranches de revenus annuels, pour que vous sachiez exactement ce qui est inclus.",
      ],
    },
  },
};

const Article = () => {
  const { slug } = useParams();
  const { t } = useLang();
  const doc = slug ? articleDocs[slug] : undefined;

  if (!doc) {
    return (
      <Section className="bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="mb-4">{t("Article not found", "Article introuvable")}</h1>
          <Link to="/resources" className="btn-primary inline-flex">
            {t("Back to Resources", "Retour aux ressources")} <ArrowRight size={16} />
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=85"
        overline={t(doc.cat.en, doc.cat.fr)}
        crumb={t("Resources", "Ressources")}
        title={t(doc.title.en, doc.title.fr)}
      />
      <Section className="bg-white">
        <FadeIn className="max-w-3xl mx-auto">
          <Link to="/resources" className="text-accent text-sm font-semibold inline-flex items-center gap-1 mb-6">
            <ArrowLeft size={14} /> {t("All resources", "Toutes les ressources")}
          </Link>
          <div className="space-y-5">
            {(t("en", "fr") === "en" ? doc.body.en : doc.body.fr).map((p, i) => (
              <p key={i} className="text-body leading-relaxed">{p}</p>
            ))}
          </div>
          <div className="card-soft mt-10 text-center">
            <h3 className="mb-3">{t("Want this handled for you?", "Vous voulez qu'on s'en occupe?")}</h3>
            <p className="text-body text-sm mb-5">
              {t("Book a free 20-minute call with our CPA team.", "Réservez un appel gratuit de 20 minutes avec notre équipe CPA.")}
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
              {t("Book a Consultation", "Réserver une consultation")} <ArrowRight size={16} />
            </a>
          </div>
        </FadeIn>
      </Section>
    </>
  );
};

export default Article;
