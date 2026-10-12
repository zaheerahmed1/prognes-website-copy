import type { CSSProperties, ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Grid.module.css";

type Width = "page" | "wide" | "reading";

type ContainerProps = {
  width?: Width;
  children: ReactNode;
  className?: string;
  as?: "div" | "header" | "footer" | "nav";
};

export function Container({
  width = "page",
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cx(
        styles.container,
        width === "wide" && styles.wide,
        width === "reading" && styles.reading,
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type GridProps = {
  children: ReactNode;
  className?: string;
};

export function Grid({ children, className }: GridProps) {
  return <div className={cx(styles.grid, className)}>{children}</div>;
}

type ItemProps = {
  span?: number;
  spanTablet?: number;
  spanDesktop?: number;
  children: ReactNode;
  className?: string;
};

export function GridItem({
  span,
  spanTablet,
  spanDesktop,
  children,
  className,
}: ItemProps) {
  const style = {
    "--span": span,
    "--span-tablet": spanTablet,
    "--span-desktop": spanDesktop,
  } as CSSProperties;

  return (
    <div className={cx(styles.item, className)} style={style}>
      {children}
    </div>
  );
}
