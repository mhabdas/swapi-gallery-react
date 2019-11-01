import logo from "../../img/logo.png";
import React from "react";
import styles from "./Header.module.scss";

const Header = () => (
  <header className={styles.header}>
    <img src={logo} alt="Logo" className={styles.logo} />
    <h1>SWApi Gallery</h1>
  </header>
);

export default Header;
