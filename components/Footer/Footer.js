import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      Copyright Giulia P. {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
