import Link from "next/link";
import styles from "./Button.module.scss"

function Button({ path, text, type, action, size, func}) {
  return (
    <Link href={path}>
      <button type={type} className={`${styles.button} ${styles[size]}`} action={action} onClick={func}>{text}</button>
    </Link>
  );
}

export default Button;
