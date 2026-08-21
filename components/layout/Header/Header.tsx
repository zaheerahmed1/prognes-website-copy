"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/primitives/Button/Button";
import { Container } from "@/components/primitives/Grid/Grid";
import { nav, site } from "@/content/nav";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();

  return <HeaderBar key={pathname} pathname={pathname} />;
}

function HeaderBar({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (media.matches) {
        setOpen(false);
      }
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <Container className={styles.bar} as="div">
        <Link className={styles.logo} href="/">
          {site.wordmark}
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.list}>
            {nav.items.map((item) => (
              <li key={item.href}>
                <Link
                  className={styles.itemLink}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <PrimaryCta />
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="mobile-primary-nav"
          aria-haspopup="true"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? nav.closeLabel : nav.menuLabel}
        </button>
      </Container>

      <nav
        id="mobile-primary-nav"
        className={styles.panel}
        aria-label="Primary"
        hidden={!open}
      >
        <ul className={styles.panelList}>
          {nav.items.map((item) => (
            <li key={item.href}>
              <Link
                className={styles.panelLink}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.panelCta}>
          <PrimaryCta />
        </div>
      </nav>
    </header>
  );
}

function PrimaryCta() {
  const label = `${nav.primaryCta.label} →`;

  if (nav.primaryCta.href) {
    return (
      <Button href={nav.primaryCta.href} variant="primary">
        {label}
      </Button>
    );
  }

  return (
    <Button variant="primary" type="button">
      {label}
    </Button>
  );
}
