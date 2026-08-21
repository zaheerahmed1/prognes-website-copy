import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Section.module.css";

type Spacing = "default" | "large" | "hero" | "flush";

type Props = {
  id?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
  spacing?: Spacing;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  spacing = "default",
  children,
  className,
  ...rest
}: Props) {
  return (
    <section
      id={id}
      className={cx(
        styles.section,
        spacing === "large" && styles.large,
        spacing === "hero" && styles.hero,
        spacing === "flush" && styles.flush,
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}
