import { Header } from "../../components/header/Header";
import { SearchBar } from "../../components/searchbar/Searchbar";
import { VitrinRow } from "../../components/vitrin/Vitrin";
import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <div>
      <Header />
      <p className={styles.title}>Moriphy!</p>
      <SearchBar />
      <VitrinRow />
      <VitrinRow />
    </div>
  );
}
