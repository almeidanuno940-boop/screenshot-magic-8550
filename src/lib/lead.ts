import { z } from "zod";

export const leadSchema = z.object({
  nome: z.string().trim().min(2, "Indique o seu nome.").max(100),
  empresa: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Indique um email válido.").max(255),
  telefone: z
    .string()
    .trim()
    .max(30)
    .regex(/^[+\d\s()-]*$/, "Indique um telefone válido.")
    .optional()
    .or(z.literal("")),
  servico: z.string().min(1, "Escolha um serviço."),
  mensagem: z.string().trim().min(10, "Descreva brevemente o seu pedido (mín. 10 caracteres).").max(2000),
});

export type Lead = z.infer<typeof leadSchema>;

/**
 * Single integration point for lead submissions.
 * Set VITE_MAKE_WEBHOOK_URL to send leads to a Make (or any) webhook.
 */
export async function submitLead(lead: Lead): Promise<void> {
  const url = import.meta.env['VITE_MAKE_WEBHOOK_URL'] as string | undefined;
  const payload = { ...lead, origem: "website", enviadoEm: new Date().toISOString() };
  if (!url) {
    await new Promise((r) => setTimeout(r, 700));
    return;
  }
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Webhook respondeu ${res.status}`);
}
