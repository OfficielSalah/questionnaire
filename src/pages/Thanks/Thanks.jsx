import React from "react";
import styles from "./Thanks.module.css";

export default function Thanks() {
  return (
    <div className={styles.screen}>
      <div className={styles.box}>
        <div className={styles.inner_box}>
          <div className={styles.top}>
            <h1 style={{ textAlign: "center" }}>
              ¡Muchas gracias por tu participación!
            </h1>
          </div>

          <p className={styles.top} style={{ textAlign: "center" }}>
            Tu información ha sido registrada exitosamente
          </p>

          <div className={styles.bullets}>
            <span></span>
            <span></span>
            <span></span>
            <span className={styles.active}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
