import { useNavigate, useParams } from "react-router-dom";
import styles from "./Searchbar.module.css";
import { useCallback, useState } from "react";
import searchIcon from "../../assets/search.svg";

export function SearchBar() {
  const { query } = useParams<{ query: string }>();
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState(query);
  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(e.target.value);
    },
    []
  );
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(searchInput);
      navigate(`/search/${searchInput}`);
    },
    [searchInput] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <img className={styles.search_icon} src={searchIcon} alt="search" />
      <input
        type="search"
        placeholder="Search"
        value={searchInput}
        onChange={onInputChange}
      />
    </form>
  );
}
