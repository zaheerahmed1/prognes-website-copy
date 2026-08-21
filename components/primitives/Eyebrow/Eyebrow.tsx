import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Eyebrow.module.css";

type Props = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLParagraphElement>;

export function Eyebrow({ children, className, ...rest }: Props) {
  return (
    <p className={cx(styles.eyebrow, className)} {...rest}>
      {children}
    </p>
  );
}
