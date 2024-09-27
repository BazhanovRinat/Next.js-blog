"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.scss';

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link href="/registration" className={styles.link}>
        Регистрация
      </Link>
      <Link href="/authorization" className={styles.link}>
        Авторизация
      </Link>
      {pathname !== '/registration' && pathname !== '/authorization' && (
        <Link href="/" className={styles.link}>
          На главную
        </Link>
      )}
    </header>
  );
};

export default Header;