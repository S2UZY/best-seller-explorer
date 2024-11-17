import { PropsWithChildren } from "react";
import styles from "../styles/Title.module.css";

export type TitleProps = PropsWithChildren;

export default function Title({ children }: TitleProps) {
  return <h1 className={styles.h1}>{children}</h1>;
}
