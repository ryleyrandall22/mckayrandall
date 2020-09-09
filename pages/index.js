import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ryley Randall</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <h1>Ryley Randall</h1>
      <h3>(sup)</h3>
    </div>
  );
}
