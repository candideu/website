import classNames from 'classnames';
import Link from 'next/link';
import Logo from 'assets/logo.svg';
import styles from './CompanyLogo.module.css';

interface Props {
  className?: string;
}

export default function CompanyLogo({ className }: Props) {
  return (
    <Link href="/">
      <a className={classNames(styles.logo, className)}>
        <Logo />
        <div>umami</div>
      </a>
    </Link>
  );
}
