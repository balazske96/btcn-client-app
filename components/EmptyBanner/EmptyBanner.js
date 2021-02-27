import styles from './EmptyBanner.module.scss';
import BitcoinLogo from '../../public/bitcoin.svg';
import Link from 'next/link';

export default function EmptyBanner({ link, linkText }) {
    return (
        <div className={styles.container}>
            <div className={styles.linkContainer}>
                <Link href={link}>
                    {linkText}
                </Link>
            </div>
            <div className={styles.logo}>
                <div className={styles.imageContainer}>
                    <BitcoinLogo className={styles.bitcoinLogo} />
                </div>
                <div className={styles.logoName}>BITCOINCASINOLISTS</div>
            </div>
        </div>
    )
}