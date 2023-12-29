import styles from "./Header.module.css";
import cartIcon from "../../assets/cart.svg";
import heartIcon from "../../assets/heart.svg";
import { useState } from "react";

interface Props {
  showLogo?: boolean;
}
export function Header(props: Props) {
  return (
    <header className={styles.container}>
      <span style={{ visibility: props.showLogo ? "visible" : "hidden" }}>
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
