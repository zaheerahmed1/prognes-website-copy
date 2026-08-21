import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary";

type Common = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: undefined;
  };

type ButtonAsLink = Common & {
  href: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = "primary", className, children } = props;
  const classes = cx(styles.button, styles[variant], className);

  if ("href" in props && props.href) {
    return (
      <Link className={classes} href={props.href}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      disabled={buttonProps.disabled}
      onClick={buttonProps.onClick}
      aria-expanded={buttonProps["aria-expanded"]}
      aria-controls={buttonProps["aria-controls"]}
      aria-label={buttonProps["aria-label"]}
    >
      {children}
    </button>
  );
}
