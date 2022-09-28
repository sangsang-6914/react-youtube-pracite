import { useNavigate } from 'react-router-dom';
import styles from '../css/header.module.css';

function Header() {
  const navigate = useNavigate()

  const onLogoClick = () => {
    navigate('/')
  }

  return (
    <>
      <nav className={styles.header}>
        <div className={styles.logoWrapper} onClick={onLogoClick}>
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
