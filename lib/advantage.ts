/**
 * Advantage Audit — site-level configuration.
 *
 * Calendly and lead-storage config live here so the page components
 * never hardcode secrets or external URLs.
 */

/** Calendly booking link for the post-submission CTA. */
export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/progness-ai/30min";

export const ADVANTAGE_API_ENDPOINT =
  process.env.NEXT_PUBLIC_ADVANTAGE_API_ENDPOINT ??
  "https://script.google.com/macros/s/AKfycbzkv7LbEkKoRtz1S5mwjyzd865igCNrM1WJxIjrgh4229pRI-WYO2X8IUrEkufo-IjPAw/exec";

/**
 * Lead-storage interface.
 *
 * The page calls `submitAdvantageLead()` which currently logs to the
 * console. Swap the implementation for any provider (Supabase, Airtable,
 * API route, etc.) without changing page code.
 */
export type AdvantageLead = {
  name: string;
  email: string;
  businessName: string;
  website: string;
  phone: string;
  challenge: string;
  submittedAt: string;
};

export async function submitAdvantageLead(
  lead: AdvantageLead,
): Promise<{ ok: boolean }> {
  try {
    const payload = {
      name: lead.name,
      email: lead.email,
      businessName: lead.businessName,
      website: lead.website,
      phone: lead.phone,
      challenge: lead.challenge,
    };

    const response = await fetch(ADVANTAGE_API_ENDPOINT, {
      method: "POST",
      // Using text/plain to avoid CORS preflight, but sending JSON content
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return { ok: false };
    }

    const data = await response.json();
    // Only return ok: true if the API confirms success: true
    return { ok: data.success === true };
  } catch (error) {
    console.error("[Advantage Audit] Failed to submit lead:", error);
    return { ok: false };
  }
}
