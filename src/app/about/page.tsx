import Title from "@/components/Title";
import styles from "../../styles/AboutPage.module.css";

export default function AboutPage() {
  return (
    <main>
      <Title>ABOUT US</Title>
      <div className={styles.div}>
        Welcome to the offical explorer for The New York Best Seller list <br />
        explorer. We hope you enjoy yout stay !
      </div>
    </main>
  );
}
