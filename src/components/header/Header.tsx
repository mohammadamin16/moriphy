import styles from "./Header.module.css";
import cartIcon from "../../assets/cart.svg";
import heartIcon from "../../assets/heart.svg";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  showLogo?: boolean;
}
export function Header(props: Props) {
  const navigate = useNavigate();
  const goToHome = useCallback(() => {
    navigate("/");
  }, []);
  return (
    <header className={styles.container}>
      <span
        onClick={goToHome}
        style={{ visibility: props.showLogo ? "visible" : "hidden" }}
      >
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
