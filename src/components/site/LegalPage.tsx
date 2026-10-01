import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 pt-32 pb-24 sm:px-8">
        <p className="eyebrow">Documento legal</p>
        <h1 className="mt-3 text-4xl font-semibold">{title}</h1>
        <div className="mt-6 rounded-xl border border-primary/30 bg-accent px-5 py-4 text-sm text-accent-foreground">
          Texto a rever: este documento é provisório e será substituído por uma versão revista.
        </div>
        <div className="mt-8 space-y-5 text-muted-foreground">{children}</div>
      </main>
      <Footer />
    </>
  );
}
