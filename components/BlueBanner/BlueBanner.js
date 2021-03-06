import styles from './BlueBanner.module.scss';
import VerticalDivider from '../VerticalDivider/VerticalDivider';
import BitcoinLogo from '../../public/bitcoin.svg';

export default function BlueBanner() {

    return (
        <div className={styles.headerBanner}>
            <div className={styles.logo}>
                <div className={styles.imageContainer}>
                    <BitcoinLogo className={styles.bitcoinLogo} />
                </div>
                <VerticalDivider color='#98A0A7' />
                <div className={styles.logoName}>BITCOINCASINOLISTS</div>
            </div>
        </div>
    )
}