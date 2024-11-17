"use client";

import Link from "next/link";
import styles from "../styles/ListCard.module.css";

export interface ListCardProps {
  listName: string;
  displayName: string;
}

export default function ListCard({ listName, displayName }: ListCardProps) {
  return (
    <div className={styles.card}>
      <Link href={`/list/${listName}`} className={styles.link}>
        <span className={styles.displayName}>{displayName}</span>
        <span className={styles.arrow}>→</span>
      </Link>
    </div>
  );
}
