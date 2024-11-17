import { PropsWithChildren } from "react";
import styles from "../styles/ListGrid.module.css";

export type ListGridProps = PropsWithChildren;

export default function ListGrid({ children }: ListGridProps) {
  return <div className={styles.grid}>{children}</div>;
}
