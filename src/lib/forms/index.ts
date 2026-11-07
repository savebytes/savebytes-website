/**
 * Lead/contact form submission behind one interface. Add a provider by writing one function
 * and selecting it here; no component changes needed.
 *   NEXT_PUBLIC_FORM_ENDPOINT set  -> POST JSON to it (Formspree, Basin, your own API ...)
 *   not set                        -> open the visitor's email app with the details prefilled
 */
import { site } from '../../config/site';

export type FormValues = Record<string, FormDataEntryValue>;
export type SubmitResult = { ok: true } | { ok: false; error: string; message?: string };

async function endpointProvider(endpoint: string, values: FormValues): Promise<SubmitResult> {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(values),
    });
    if (res.ok) return { ok: true };
    // The API explains a refusal in plain words (a field it could not accept, or too many messages).
    const body = await res.json().catch(() => null);
    return { ok: false, error: 'bad-status', message: typeof body?.message === 'string' ? body.message : undefined };
  } catch {
    return { ok: false, error: 'network' };
  }
}

function mailtoProvider(values: FormValues): SubmitResult {
  const body = Object.entries(values).filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n');
  window.location.href = `${site.email.href}?subject=${encodeURIComponent('Early access enquiry')}&body=${encodeURIComponent(body)}`;
  return { ok: true };
}

export async function submitLead(values: FormValues): Promise<SubmitResult> {
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
  return endpoint ? endpointProvider(endpoint, values) : mailtoProvider(values);
}
