import styles from '../css/header.module.css';

function Header() {
  return (
    <>
      <nav className={styles.header}>
        <div className={styles.logoWrapper}>
          <img
            className={styles.logo}
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt=""
          />
          <h1 className={styles.logoTitle}>Youtube</h1>
        </div>
        <div className={styles.searchWrapper}>
          <input
            className={styles.searchBox}
            type="text"
            placeholder="Search..."
          />
          <div className={styles.iconWrapper}>
            <img
              className={styles.searchIcon}
              src={`${process.env.PUBLIC_URL}/images/search.png`}
              alt=""
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
