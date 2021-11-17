import { Fragment } from "react";
import styles from "./Header.module.css";
import mealsImage from "../../assets/header1.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Fooddyz</h1>
        <HeaderCartButton showCart={props.showCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
