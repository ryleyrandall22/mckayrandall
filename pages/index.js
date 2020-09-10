import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Popup from "../components/popup";

export default function Home() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Ryley Randall</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div id={styles.header}>
        <div
          style={{
            width: 60,
            height: 60,
            marginTop: 40,
            marginRight: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            cursor: "pointer",
          }}
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1JQQDB9zNSj8vESgC4TBsHQ777q8x4F1h/view?usp=sharing"
            );
          }}
        >
          <img style={{ width: 35.5, height: 30 }} src="/assets/document.png" />
          <p style={{ marginTop: 6 }} className={styles.bit}>
            Resume
          </p>
        </div>
        <div
          style={{
            width: 60,
            height: 60,
            marginTop: 40,
            marginRight: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            cursor: "pointer",
          }}
          onClick={() => {
            window.open("https://brownfox.co");
          }}
        >
          <img style={{ width: 35.5, height: 30 }} src="/assets/web.png" />
          <p style={{ marginTop: 6 }} className={styles.bit}>
            Work
          </p>
        </div>
      </div>
      <h1 id={styles.nameBox}>Ryley Randall</h1>
      <h3>(sup)</h3>
      <div id={styles.dock}>
        <div onClick={() => setShow(true)} id={styles.startbutton}>
          <img style={{ width: 20, height: 20 }} src={"/assets/logo.png"} />
          <p className={styles.bit}>Start</p>
        </div>
      </div>
      {show && <Popup onClose={() => setShow(false)} />}
    </div>
  );
}
