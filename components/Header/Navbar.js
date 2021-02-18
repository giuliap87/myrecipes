import styles from "./Navbar.module.scss";
import Link from "next/link";

function Navbar() {
  const links = [
    { name: "New recipe", path: "/new-recipe" },
    { name: "All recipes", path: "/all-recipes" },
    { name: "Give me a recipe", path: "/give-a-recipe" },
  ];
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.logo}>My Recipes</a>
      </Link>
      <ul className={styles.list}>
        {links.map((link) => (
          <li className={styles.listItem} key={link.name}>
            <Link href={link.path}>
              <a>{link.name}</a>
            </Link>
              <div className={styles.border}></div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
