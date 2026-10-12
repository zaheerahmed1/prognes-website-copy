"use client";

/**
 * AdvantageForm — client-side form with validation, loading state,
 * duplicate-submission guard, and success state.
 */

import { useCallback, useRef, useState } from "react";
import { advantageForm, advantageSuccess } from "@/content/advantage";
import { type AdvantageLead, CALENDLY_URL, submitAdvantageLead } from "@/lib/advantage";
import { Heading } from "@/components/primitives/Heading/Heading";
import { Body } from "@/components/primitives/Body/Body";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { cx } from "@/lib/cx";
import styles from "./AdvantageForm.module.css";

/* ────────────────────────────────────────── */
/*  Validation helpers                        */
/* ────────────────────────────────────────── */

const BUSINESS_EMAIL_RE =
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const FREE_DOMAINS = new Set([
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "mail.com",
  "protonmail.com",
  "zoho.com",
]);

function isBusinessEmail(email: string): boolean {
  if (!BUSINESS_EMAIL_RE.test(email)) return false;
  const domain = email.split("@")[1]?.toLowerCase();
  return !FREE_DOMAINS.has(domain ?? "");
}

const URL_RE = /^https?:\/\/.+\..+/;

function isValidWebsite(url: string): boolean {
  return URL_RE.test(url);
}

/* ────────────────────────────────────────── */
/*  Types                                     */
/* ────────────────────────────────────────── */

type FieldErrors = Partial<Record<keyof AdvantageLead, string>>;

type FormState = "idle" | "submitting" | "success" | "error";

/* ────────────────────────────────────────── */
/*  Component                                 */
/* ────────────────────────────────────────── */

export function AdvantageForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const submittedRef = useRef(false);

  const validate = useCallback(
    (data: Record<string, string>): FieldErrors => {
      const e: FieldErrors = {};
      if (!data.name?.trim()) e.name = "Name is required.";
      if (!data.email?.trim()) {
        e.email = "Email is required.";
      } else if (!isBusinessEmail(data.email)) {
        e.email = "Please enter a business email address.";
      }
      if (!data.businessName?.trim()) e.businessName = "Business name is required.";
      if (!data.website?.trim()) {
        e.website = "Website is required.";
      } else if (!isValidWebsite(data.website)) {
        e.website = "Enter a valid URL starting with http:// or https://";
      }
      if (!data.challenge) e.challenge = "Please select a challenge.";
      return e;
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Prevent duplicate submissions
      if (submittedRef.current) return;

      const fd = new FormData(e.currentTarget);
      const raw: Record<string, string> = {};
      fd.forEach((v, k) => {
        raw[k] = v.toString();
      });

      const fieldErrors = validate(raw);
      if (Object.keys(fieldErrors).length > 0) {
        setErrors(fieldErrors);
        return;
      }

      setErrors({});
      setState("submitting");
      submittedRef.current = true;

      try {
        const lead: AdvantageLead = {
          name: raw.name,
          email: raw.email,
          businessName: raw.businessName,
          website: raw.website,
          phone: raw.phone ?? "",
          challenge: raw.challenge,
          submittedAt: new Date().toISOString(),
        };

        const result = await submitAdvantageLead(lead);
        if (result.ok) {
          setState("success");
        } else {
          setState("error");
          submittedRef.current = false;
        }
      } catch {
        setState("error");
        submittedRef.current = false;
      }
    },
    [validate],
  );

  /* ── Success state ── */
  if (state === "success") {
    return (
      <SectionReveal>
        <div className={styles.successWrap} id="advantage-success">
          <div className={styles.successIcon} aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="24" fill="var(--color-accent-soft)" />
              <path
                d="M16 24.5L21.5 30L32 18"
                stroke="var(--color-accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <Heading variant="h2" className={styles.successHeadline}>
            {advantageSuccess.headline}
          </Heading>

          <Body variant="large" className={styles.successCopy}>
            {advantageSuccess.copy}
          </Body>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryBtn}
          >
            {advantageSuccess.cta} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </SectionReveal>
    );
  }

  /* ── Form state ── */
  const f = advantageForm;

  return (
    <SectionReveal>
      <div className={styles.formWrap} id="advantage-form-container">
        <div className={styles.formHeader}>
          <Heading variant="h2" className={styles.formHeadline}>
            {f.headline}
          </Heading>
          <Body variant="large" className={styles.formSubheadline}>
            {f.subheadline}
          </Body>
        </div>

        <form
          ref={formRef}
          className={styles.form}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className={styles.fieldGrid}>
            {/* Name */}
            <div className={styles.field}>
              <label htmlFor="adv-name" className={styles.label}>
                {f.fields.name.label}
              </label>
              <input
                id="adv-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder={f.fields.name.placeholder}
                className={cx(styles.input, errors.name && styles.inputError)}
                required
                disabled={state === "submitting"}
              />
              {errors.name && (
                <p className={styles.errorMsg} role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className={styles.field}>
              <label htmlFor="adv-email" className={styles.label}>
                {f.fields.email.label}
              </label>
              <input
                id="adv-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={f.fields.email.placeholder}
                className={cx(styles.input, errors.email && styles.inputError)}
                required
                disabled={state === "submitting"}
              />
              {errors.email && (
                <p className={styles.errorMsg} role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Business Name */}
            <div className={styles.field}>
              <label htmlFor="adv-business" className={styles.label}>
                {f.fields.businessName.label}
              </label>
              <input
                id="adv-business"
                name="businessName"
                type="text"
                autoComplete="organization"
                placeholder={f.fields.businessName.placeholder}
                className={cx(
                  styles.input,
                  errors.businessName && styles.inputError,
                )}
                required
                disabled={state === "submitting"}
              />
              {errors.businessName && (
                <p className={styles.errorMsg} role="alert">
                  {errors.businessName}
                </p>
              )}
            </div>

            {/* Website */}
            <div className={styles.field}>
              <label htmlFor="adv-website" className={styles.label}>
                {f.fields.website.label}
              </label>
              <input
                id="adv-website"
                name="website"
                type="url"
                autoComplete="url"
                placeholder={f.fields.website.placeholder}
                className={cx(
                  styles.input,
                  errors.website && styles.inputError,
                )}
                required
                disabled={state === "submitting"}
              />
              {errors.website && (
                <p className={styles.errorMsg} role="alert">
                  {errors.website}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className={styles.field}>
              <label htmlFor="adv-phone" className={styles.label}>
                {f.fields.phone.label}
              </label>
              <input
                id="adv-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder={f.fields.phone.placeholder}
                className={styles.input}
                disabled={state === "submitting"}
              />
            </div>
          </div>

          {/* Challenge */}
          <fieldset className={styles.challengeFieldset}>
            <legend className={styles.label}>{f.challengeLabel}</legend>
            <div className={styles.challengeGrid}>
              {f.challengeOptions.map((option) => (
                <label key={option} className={styles.challengeOption}>
                  <input
                    type="radio"
                    name="challenge"
                    value={option}
                    className={styles.radioInput}
                    disabled={state === "submitting"}
                  />
                  <span className={styles.challengeLabel}>{option}</span>
                </label>
              ))}
            </div>
            {errors.challenge && (
              <p className={styles.errorMsg} role="alert">
                {errors.challenge}
              </p>
            )}
          </fieldset>

          {/* Error banner */}
          {state === "error" && (
            <div className={styles.errorBanner} role="alert">
              Something went wrong. Please try again.
            </div>
          )}

          {/* Submit */}
          <div className={styles.submitRow}>
            <button
              type="submit"
              className={styles.primaryBtn}
              disabled={state === "submitting"}
            >
              {state === "submitting" ? (
                <>
                  <span className={styles.spinner} aria-hidden="true" />
                  Submitting…
                </>
              ) : (
                <>
                  {f.cta} <span aria-hidden="true">&rarr;</span>
                </>
              )}
            </button>

            <Body variant="small" className={styles.supportingText}>
              {f.supportingText}
            </Body>
          </div>
        </form>
      </div>
    </SectionReveal>
  );
}
