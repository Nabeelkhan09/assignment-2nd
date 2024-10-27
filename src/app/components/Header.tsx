import Link from 'next/link';
import Styles from "./Header.module.css"

const Header= () => {
  return (
    <nav className={Styles.heading}>
      <ul className={Styles.tag}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;