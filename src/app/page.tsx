import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/SMD.svg"
          alt="Next.js Logo"
          width={400}
          height={200}
          priority
        />
      </div>
    </main>
  );
}
