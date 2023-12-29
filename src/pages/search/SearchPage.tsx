import { useParams } from "react-router-dom";
import styles from "./SearchPage.module.css";
import { Header } from "../../components/header/Header";
import { SearchBar } from "../../components/searchbar/Searchbar";
export function SearchPage() {
  const { query } = useParams<{ query: string }>();
  return (
    <div className={styles.container}>
      <Header showLogo />
      <SearchBar />
    </div>
  );
}
