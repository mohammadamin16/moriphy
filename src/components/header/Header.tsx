import styles from "./Header.module.css";
import cartIcon from "../../assets/cart.svg";
import heartIcon from "../../assets/heart.svg";
import { useState } from "react";

export function Header() {
  const [showLogo, setShowLogo] = useState(false);
  return (
    <header className={styles.container}>
      <span style={{ visibility: showLogo ? "visible" : "hidden" }}>
        Moriphy
      </span>
      <div className={styles.icons}>
        <img src={heartIcon} alt="heart" />
        <img src={cartIcon} alt="cart" />
        <button>Sign in</button>
      </div>
    </header>
  );
}
