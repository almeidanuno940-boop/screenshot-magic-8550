# Site Nuno Almeida — Automation & Data Analytics

Site completo de uma página com secções, em português de Portugal, seguindo integralmente o briefing (textos, preços, contactos e regras de "não inventar").

## Direção visual
- Base clara e premium: fundo branco-papel quente, texto quase preto, um único acento azul-petróleo profundo com toque ciano discreto (sem roxo, sem néon).
- Tipografia: Geist (títulos, tracking apertado) + Geist Mono para rótulos/numeração de passos — aspeto técnico e credível.
- Cards com bordas finas, sombras suaves, cantos 14px, grelha de pontos subtil como fundo nas zonas "de dados".
- Sem fotografias de stock; os visuais são diagramas de fluxo construídos em código.
- Animações contidas: fade-in ao scroll, fluxo do hero com "pulso" a percorrer os nós, navbar que ganha fundo ao fazer scroll.

## Secções (por ordem)
1. Navbar fixa — logo, 8 links, botão "Pedir demonstração", menu hamburger no mobile.
2. Hero — headline, subtítulo, 2 botões, fluxo animado NOVO LEAD → … → DASHBOARD, frase de apoio, email/telefone discretos.
3. Problema — 4 cards + texto + CTA.
4. Serviços — 6 cards com "Inclui", preço e CTA (serviço 5 com mini-fluxo visual).
5. Soluções por setor — 6 cards + CTA.
6. Demonstração — fluxo de 12 passos animado (horizontal em desktop, vertical em mobile) + nota "exemplo demonstrativo".
7. Como funciona — 5 passos numerados.
8. Ferramentas — Make, OpenAI, Power BI, Excel, Power Query, SQL, Google Sheets, Gmail, Google Forms + frase.
9. Preços — 3 planos ("Mais completo" destacado), extras (personalizados, manutenção €50/mês) e nota.
10. Sobre mim — texto do briefing + cartão Foco/Base/Objetivo (sem experiência, certificações ou clientes inventados).
11. FAQ — 7 perguntas em acordeão.
12. Contacto — formulário com validação, estados de envio/erro/sucesso, botões "Enviar email" e "Ligar agora".
13. CTA final + Footer (contactos, links, Política de Privacidade e Termos, © 2026).

## Páginas extra
- /privacidade e /termos — placeholders claramente marcados "Texto a rever".

## SEO
Título e descrição do briefing, Open Graph, headings semânticos, sitemap.xml e robots.txt atualizado, dados estruturados (ProfessionalService) só com dados reais.

## Formulário
Sem backend por agora: envio passa por uma única função preparada para um webhook Make (endereço configurável mais tarde). Enquanto não houver webhook, o pedido é validado e mostra a mensagem de sucesso.

## Detalhes técnicos
- Rota `/` com componentes por secção em `src/components/site/*`; conteúdos em `src/content/site.ts`.
- Tokens oklch em `src/styles.css`; fontes via `<link>` em `__root.tsx`.
- Formulário com react-hook-form + zod; `submitLead()` em `src/lib/lead.ts` faz POST para `VITE_MAKE_WEBHOOK_URL` se definido.
- Animações com IntersectionObserver + CSS, respeitando `prefers-reduced-motion`.
- head() próprio em `/`, `/privacidade`, `/termos`; `public/sitemap.xml`.
