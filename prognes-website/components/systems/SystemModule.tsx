import { ComponentPropsWithoutRef } from "react";
import styles from "./SystemModule.module.css";

interface SystemModuleProps extends ComponentPropsWithoutRef<"div"> {
  number: string;
  title: string;
  items: readonly string[] | string[];
}

export function SystemModule({ number, title, items, className, ...props }: SystemModuleProps) {
  return (
    <div className={`${styles.module} ${className || ""}`} {...props}>
      <div className={styles.header}>
        <span className={styles.number}>{number}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <ul className={styles.list}>
        {items.map((item, idx) => (
          <li key={idx} className={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
      <div className={styles.icon} aria-hidden="true">
        &rarr;
      </div>
    </div>
  );
}
