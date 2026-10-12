import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Heading.module.css";

type Level = "display" | "h1" | "h2" | "h3";
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

type Props = {
  as?: HeadingTag;
  variant?: Level;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Heading({
  as,
  variant = "h2",
  children,
  className,
  id,
}: Props) {
  const Tag: HeadingTag = as ?? (variant === "display" ? "h1" : variant);

  return (
    <Tag id={id} className={cx(styles[variant], className)}>
      {children}
    </Tag>
  );
}

