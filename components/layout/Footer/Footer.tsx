import Link from "next/link";
import { Container } from "@/components/primitives/Grid/Grid";
import { footer, nav, site } from "@/content/nav";
import styles from "./Footer.module.css";

export function Footer() {
  const ctaHref = nav.primaryCta.href;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.topRow}>
          <Link className={styles.wordmark} href="/">
            {site.wordmark}
          </Link>

          {ctaHref ? (
            <Link href={ctaHref} className={styles.primaryCta}>
              {nav.primaryCta.label} <span aria-hidden="true">&rarr;</span>
            </Link>
          ) : (
            <div className={styles.primaryCtaDisabled} aria-disabled="true">
              {nav.primaryCta.label} <span aria-hidden="true">&rarr;</span>
            </div>
          )}
        </div>

        <div className={styles.bottomRow}>
          <nav aria-label={footer.navLabel}>
            <ul className={styles.list}>
              {nav.items.map((item) => (
                <li key={item.href}>
                  <Link className={styles.link} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className={styles.copyright}>
            &copy; {year} PROGNES. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
