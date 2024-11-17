import { PropsWithChildren } from "react";
import styles from "../styles/BookGrid.module.css";

export type BookGridProps = PropsWithChildren;

export default function BookGrid({ children }: BookGridProps) {
  return <div className={styles.grid}>{children}</div>;
}
