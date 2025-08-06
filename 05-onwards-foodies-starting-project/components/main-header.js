import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="Foodies Logo" />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/meals/share">Share Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
