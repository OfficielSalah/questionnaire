import React, { useState, useEffect } from "react";
import styles from "./Questions.module.css";

import Mobile from "./Mobile";
import Desktop from "./Desktop";

export default function Questions() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 880;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <div className={styles.screen}>
      {width > breakPoint ? <Desktop /> : <Mobile />}
    </div>
  );
}
