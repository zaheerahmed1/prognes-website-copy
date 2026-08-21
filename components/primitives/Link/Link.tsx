import NextLink from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Link.module.css";

type Props = {
  href: ComponentProps<typeof NextLink>["href"];
  children: ReactNode;
  className?: string;
  muted?: boolean;
};

export function TextLink({ href, children, className, muted }: Props) {
  return (
    <NextLink
      href={href}
      className={cx(styles.link, muted && styles.muted, className)}
    >
      {children}
    </NextLink>
  );
}
