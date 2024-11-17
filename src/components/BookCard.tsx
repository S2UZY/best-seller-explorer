"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/BookCard.module.css";

export interface BookCardProps {
  title: string;
  author: string;
  bookImage: string;
  amazonProductUrl: string;
}

export default function BookCard({
  title,
  author,
  bookImage,
  amazonProductUrl,
}: BookCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={bookImage} width={329} height={500} alt={title} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>{author}</p>
        <Link
          href={amazonProductUrl}
          className={styles.buyButton}
          target="_blank"
        >
          Buy now
        </Link>
      </div>
    </div>
  );
}
