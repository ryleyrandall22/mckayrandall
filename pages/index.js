import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Popup from "../components/popup";
import Blaster from "../components/astroid";

export default function Home() {
  const [show, setShow] = useState(false);
  const [blaster, setBlaster] = useState(false);
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Mckay Randall</title>
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
              "https://drive.google.com/file/d/1-5_DrV0WHSe4LTvr0OIRqxXEhb86RfX4/view?usp=sharing"
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
            window.open("https://playpickleball.club");
          }}
        >
          <img style={{ width: 35.5, height: 30 }} src="/assets/web.png" />
          <p style={{ marginTop: 6 }} className={styles.bit}>
            Pickleball
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
            window.open("https://withmessaging.com");
          }}
        >
          <img style={{ width: 35.5, height: 30 }} src="/assets/web.png" />
          <p style={{ marginTop: 6 }} className={styles.bit}>
            With
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
            setBlaster(true);
          }}
        >
          <img style={{ width: 35.5, height: 30 }} src="/assets/pong.png" />
          <p style={{ marginTop: 6 }} className={styles.bit}>
            3D-PONG
          </p>
        </div>
      </div>
      <h1 style={{ margin: 0 }} id={styles.nameBox}>
        Welcome to MckayRandall.com
      </h1>
      <h3
        style={{
          margin: 0,
          fontSize: 28,
          color: "white",
          fontFamily: `"VT323", monospace`,
        }}
      >
        Home of Mckay Randall, J.D.
      </h3>

      <div id={styles.dock}>
        <div onClick={() => setShow(true)} id={styles.startbutton}>
          <img style={{ width: 20, height: 20 }} src={"/assets/logo.png"} />
          <p className={styles.bit}>Start</p>
        </div>
      </div>
      {show && <Popup onClose={() => setShow(false)} />}
      {blaster && <Blaster onClose={() => setBlaster(false)} />}
    </div>
  );
}
