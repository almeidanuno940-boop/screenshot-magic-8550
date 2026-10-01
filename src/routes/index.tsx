import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { About, Contact, Demo, Faq, FinalCta, Hero, HowItWorks, Pricing, Problem, Sectors, Services, Tools } from "@/components/site/Sections";
import { CONTACT } from "@/content/site";

const TITLE = "Nuno Almeida | Automação, IA e Power BI para Empresas";
const DESC = "Soluções de automação, inteligência artificial, Power BI e análise de dados para pequenas empresas em Portugal.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Nuno Almeida — Automation & Data Analytics",
  description: DESC,
  email: CONTACT.email,
  telephone: "+351916626440",
  areaServed: "PT",
  knowsAbout: ["Automação de processos", "Automação de leads", "Inteligência artificial", "Power BI", "Análise de dados"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "automação de processos, automação de leads, automação para empresas, Power BI, dashboards Power BI, inteligência artificial para empresas, análise de dados, Aveiro, Portugal" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_PT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Sectors />
        <Demo />
        <HowItWorks />
        <Tools />
        <Pricing />
        <About />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
