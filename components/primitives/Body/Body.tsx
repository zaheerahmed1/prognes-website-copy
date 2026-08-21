import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Body.module.css";

type Variant = "body" | "large" | "small" | "caption";

type Props = {
  as?: "p" | "div";
  variant?: Variant;
  tone?: "secondary" | "primary";
  children: ReactNode;
  className?: string;
};

export function Body({
  as: Tag = "p",
  variant = "body",
  tone = "secondary",
  children,
  className,
}: Props) {
  return (
    <Tag
      className={cx(
        styles.body,
        variant !== "body" && styles[variant],
        tone === "primary" && styles.primary,
        className,
      )}
    >
      {children}
    </Tag>
  );
}
