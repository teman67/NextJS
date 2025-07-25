import classes from "./SearchBar.module.css";
import { MdSearch } from "react-icons/md";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchWrapper}>
        <MdSearch className={classes.searchIcon} />
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className={classes.searchInput}
        />
      </div>
    </div>
  );
}

export default SearchBar;
