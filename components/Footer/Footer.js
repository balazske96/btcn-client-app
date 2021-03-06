import styles from './Footer.module.scss';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.content}>
                <div className={styles.linksContainer}>
                    <Link href="/terms-and-conditions">
                        Terms and Conditions
                    </Link>
                    <Link href="/terms-and-conditions">
                        Privacy Policy
                    </Link>
                </div>
                <div className={styles.copyrightLogoContainer}>
                    &#169; 2020 Bitconcasino Lists
                </div>
            </div>
        </footer>
    )
}