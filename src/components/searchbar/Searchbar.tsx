import styles from "./Searchbar.module.css";
export function SearchBar() {
  return (
    <div className={styles.container}>
      <img
        className={styles.search_icon}
        src="https://img.icons8.com/ios-filled/50/000000/search--v1.png"
        alt="search"
      />
      <input type="text" placeholder="Search..." />
    </div>
  );
}
